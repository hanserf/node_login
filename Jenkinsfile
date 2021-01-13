
node('nuxbuilder') {
    def app
    stage('Cloning'){
        checkout scm    
    }
    repo = scm
    stage('Fetch image') {            
        echo 'Fetching Image from registry'
        app = docker.build("hanserf/node-webdev")
        
    }
    stage('Test Image'){
        app.inside {
            sh 'echo $PATH'
            sh '''
            service mongod start
            cd /usr/src/app
            ip a
            node app.js
            '''
        }
        echo 'Out of Docker'        
    }
    stage('Cleanup'){
        echo 'Out of Docker'
        always {
            deleteDir()
        }
    }        
}
