pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
        }
    }

    environment {
        VARIABLE_1="10"
        VARIABLE_2="7"
    }

    stages {
        stage('Build') { 
            steps {
                sh 'node branch.js' 
            }
        }
    }
}
