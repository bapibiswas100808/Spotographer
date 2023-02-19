import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Singleblog from '../Singleblog/Singleblog';
import "./BlogSection.css"

const BlogSection = () => {
    return (
        <div className='blog-section'>
            <Row>
            <Singleblog heading="Difference between authorization and authentication" 
            text="Authentication is a process to verify any person but Authorization is a process to the person access level. Authentication is verifying any person. Authorization is set the person's activity. Authentication active through Email, SMS, One time pin etc. Authorization can set using settings. User can set the Authentication settings but user can't set the Authorization settings, it can set by the organization or admin"/>
            <Singleblog heading="Why I'm using firebase? What other options I have to implement authentication?" 
            text="Why I'm using firebase? What other options I have to implement authentication?
            I'm using Firebase because is's safe and fast. The trust level is very high because of Google's service. Also we can start Firebase free. Also the documentation is well described. Using Firebase we can do Authentication, Realtime Database, Hosting and many more in one place easily" />
            <Singleblog heading="What other services does firebase provide other than authentication."
            text="Other than authentication, firebase have some other services. Firebase provide Realtime Database, Hosting, Cloud Storage, Google Analytics, Cloud Firestore, Cloud Messaging, Cloud Functions etc. They have free and paid both services. Their services are used for different platform like, Web, IOS+, Android, Unity etc. They have Machine Learning package too."/>
            </Row>
            
        </div>
    );
};

export default BlogSection;