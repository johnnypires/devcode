git config --global user.email "johnny_po@hotmail.com"

$ git init

Mostra os arquivos que ainda não estão no repositorio

$ git status

Adiciona os arquivos para irem ao repositório

$ git add .

Nomeia esse upload, cada commit tem um nome.

$ git commit -m “Exemplo – exercícios sobre operadores aritmeticos”

Informa para qual repositório vai esses arquivos, o link abaixo você vai copiar do github

$ git remote add origin https://github.com/seunome/nomerepositorio.git

Agora precisamos enviar os arquivos o comando é:

$ git push origin master

Na primeira vez ele irá pedir seu usuário e senha que cadastrou no git.

Em caso de erro nessa etapa, use antes o comando abaixo:

git pull origin master –allow-unrelated-histories (só em caso de erro)

Em seguida use esse novamente

$ git push origin master