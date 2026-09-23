pipeline {
    agent any

    stages {

        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
  stage('Executar testes Cypress') {
            steps {
                bat 'npx cypress run'
            }
    }
}
}