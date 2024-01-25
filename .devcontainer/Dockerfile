FROM ubuntu:20.04

# install basic package
RUN apt-get update -y \
    && apt-get upgrade -y \
    && apt-get autoremove -y \
    && apt-get install -y  curl wget unzip docker.io sudo build-essential gettext-base jq zip language-pack-ja-base language-pack-ja locales sshpass

# locale、timezoneを日本に設定
RUN locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV TZ=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# git secrets
RUN git clone https://github.com/awslabs/git-secrets.git && cd git-secrets && make install && cd .. && rm -rf git-secrets

# nodejs install
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs \
    && npm -g install n \
    && n stable \
    && npm install -g yarn

# techtrain test tool
RUN npx playwright install \
    && npx playwright install-deps 

# bash history setting
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo $SNIPPET >> "/root/.bashrc"