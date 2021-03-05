pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
        }
    }

    environment {
            myPassword = credentials('${myPassword}')
    }

    stages {
        stage('Build') { 
            steps {
                sh 'node branch.js' 
            }
        }
    }
}
