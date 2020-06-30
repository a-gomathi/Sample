prodName = ''

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                script {
                    echo server
                    if (server == "IBM")
                    prodName = ${env.IBM}

                    else
                    prodName = ${env.HCL}

                    fi
                }
                variableReplace(
                    configs: [
                        variablesReplaceConfig(
                            configs: [
                                variablesReplaceItemConfig( 
                                    name: 'SERVER',
                                    value: prodName
                                )
                            ],
                            fileEncoding: 'UTF-8', 
                            filePath: 'test.js', 
                            variablesPrefix: '', 
                            variablesSuffix: ''
                            )]
                )
            }
        }
    }
}
