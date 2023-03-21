FROM maven:3.6.1-jdk-8 as maven_builder

WORKDIR /backend
COPY . /backend
RUN mvn clean package

#FROM tomcat:9.0-jdk11-openjdk-slim
FROM tomcat:8.0.51-jre8-alpine
ENV JAVA_OPTS="-Ddebug"

# Copy the WAR file to the tomcat webapps directory
COPY --from=maven_builder /backend/target/*.war /usr/local/tomcat/webapps/cbporganizer.war

# Expose the default Tomcat port
EXPOSE 8080

# Start the Tomcat server
CMD ["catalina.sh", "run"]
