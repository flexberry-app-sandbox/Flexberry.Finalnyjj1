docker build --no-cache -f SQL\Dockerfile.PostgreSql -t finalnyjj/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t finalnyjj/app ../..
