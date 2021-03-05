pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
        }
    }

    environment {
            myPassword = credentials('myPassword')
            mygithub = credentials('MyGitHub')
    }

    stages {
        stage('Build') { 
            steps {
                sh 'node branch.js' 
            }
        }
    }
}
