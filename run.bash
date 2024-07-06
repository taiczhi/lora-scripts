#!/bin/bash
export HF_HOME=huggingface
export PYTHONUTF8=1
# 获取脚本所在目录的绝对路径
script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
# 激活虚拟环境
source "$script_dir/venv/bin/activate"
cd "$script_dir"
HF_ENDPOINT=https://hf-mirror.com python launch.py "$@"