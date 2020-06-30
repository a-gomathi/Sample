prodName = ''

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                script {
                    if (server == "IBM")
                    prodName = process.env.IBM

                    else
                    prodName = process.env.HCL

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
