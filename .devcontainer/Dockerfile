FROM node:16-buster

ENV SHELL /bin/bash
ENV LANG en_US.utf-8
ENV LC_ALL en_US.utf-8

RUN apt-get update && \
    apt-get install -y --no-install-recommends locales && \
    locale-gen && \
    localedef -f UTF-8 -i en_US en_US.UTF-8

USER node
WORKDIR /home/node

RUN git clone https://github.com/pyenv/pyenv.git ~/.pyenv
RUN echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc && \
    echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc && \
    echo 'eval "$(pyenv init --path)"' >> ~/.bashrc

RUN ~/.pyenv/bin/pyenv install 3.9.6 && \
    ~/.pyenv/bin/pyenv global 3.9.6

RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python - --no-modify-path && \
    echo 'export PATH="$HOME/.poetry/bin:$PATH"' >> .bashrc && \
    ~/.poetry/bin/poetry config virtualenvs.in-project true

RUN echo "alias ll='ls -la'" >> .bash_aliases && \
    echo "alias la='ls -la'" >> .bash_aliases