FROM java:8
MAINTAINER TestingXperts
EXPOSE 9000
ADD /target/mysql-rest-service-0.0.1-SNAPSHOT.jar mysql-rest-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar","mysql-rest-service-0.0.1-SNAPSHOT.jar"]