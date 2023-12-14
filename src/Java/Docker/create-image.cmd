docker build --no-cache -f SQL\Dockerfile.PostgreSql -t finalnyjj-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t finalnyjj-java/app ../../..
