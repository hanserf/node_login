
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
            cd /opt/node_app
            node app.js 
            '''
        }
    }        
}
