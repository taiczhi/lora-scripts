#!/usr/bin/bash

echo "Installing torch & xformers..."
echo "install torch 2.0.0+cu117"
pip -q install torch==2.0.0 torchvision xformers triton > /dev/null 2>&1 echo 安装需求依赖成功
cd "/mnt/workspace/lora-scripts/sd-scripts/" || exit
pip -q  install --upgrade -r requirements.txt > /dev/null 2>&1  && echo 安装需求依赖成功
pip -q install --upgrade lion-pytorch lycoris-lora dadaptation > /dev/null 2>&1 && echo 安装训练器成功
pip uninstall -q bitsandbytes -y > /dev/null 2>&1 && echo 卸载成功
pip install  -q --no-cache-dir bitsandbytes[full] > /dev/null 2>&1    && echo 安装成功
pip uninstall -y tensorboard tb-nightly > /dev/null 2>&1 echo 
pip install tb-nightly  > /dev/null 2>&1 
pip install --upgrade fastapi uvicorn wandb > /dev/null 2>&1

cd "/mnt/workspace/lora-scripts/sd-scripts/" || exit

echo "完成"