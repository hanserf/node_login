
node('nuxbuilder') {
    def app
    def repo
    stage('Cloning'){
        checkout scm    
    }
    repo = scm
    stage('Fetch image') {            
        echo 'Fetching Image from registry'
        def image
        image = docker.build("hanserf/node-webdev")
        
    }
    stage('Test Image'){
        image.inside {
            sh 'echo $PATH'
            sh 'cd /opt/node_app'
            sh 'nodejs app'
        }
    }        
}
