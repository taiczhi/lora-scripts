#!/usr/bin/env bash
# Bash strict mode
set -euo pipefail
IFS=$'\n\t'

# 设置镜像源与临时目录
export HF_ENDPOINT="https://hf-mirror.com"


# 获取当前脚本绝对路径
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export TMPDIR="${script_dir}/linshi"


create_venv=true
# 函数：退出脚本并打印错误信息
function exit_with_error {
    echo "错误：$1"
    exit 1
}

# 解析命令行参数
while [[ $# -gt 0 ]]; do
    case "$1" in
        --disable-venv)
            create_venv=false
            shift
            ;;
        *)
            exit_with_error "未知参数：$1"
            ;;
    esac
done

# 函数：创建并激活Python虚拟环境
function create_and_activate_venv {
    if ! command -v python3 &>/dev/null; then
        exit_with_error "未找到Python3，请确保已安装。"
    fi

    if [ ! -d "venv" ]; then
        echo "创建 Python 虚拟环境..."
        python3 -m venv venv || exit_with_error "创建虚拟环境失败"
    fi

    source "$script_dir/venv/bin/activate" || exit_with_error "激活虚拟环境失败."
}

# 创建并激活Python虚拟环境
if $create_venv; then
    create_and_activate_venv
fi

cd "$script_dir" || print_error_and_exit "无法进入脚本目录：$script_dir"

# 显示安装进度
echo "开始安装依赖项..."
pip install torch==2.2.2+cu121   torchvision==0.17.2+cu121
pip install xformers==0.0.25.post1


echo "更新并安装系统依赖..."
sudo apt-get update -qq || print_error_and_exit "更新软件包列表失败"
sudo apt-get install -y sudo -qq || print_error_and_exit "安装 sudo 失败"

echo "设置时区为中国上海..."
TZ=Asia/Shanghai
ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && apt update && apt install -y python3-tk || exit_with_error "设置时区失败."

# 安装其他Python依赖
cd "$script_dir" || print_error_and_exit "无法进入脚本目录：$script_dir"

pip install  -r requirements_versions.txt || exit_with_error "安装 requirements.txt 失败."

echo "安装pickleshare..."
pip install pickleshare -q || print_error_and_exit "安装 pickleshare 失败"

echo -e "\n所有依赖安装成功，现在您可以执行下一步操作。\n"

exit 0