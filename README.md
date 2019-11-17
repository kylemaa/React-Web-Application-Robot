# React-195
This is a serverless website application that is developed to simulate our Real-Time Smart Factory floor.             
URL: http://rt-smart-factory.s3-website-us-west-1.amazonaws.com/ 

## Instruction
1. Navigate to the given URL to be taken to the web applications home page. 
2. Click the "Signup" button on the top right of the home page and create an account. Navigate to the email you signed up with to get your verification code. Third, start creating a grid by clicking the "+ Create a new grid" button on the home page. 
3. Fill in "Grid Title", "Rows", and "Columns" with the name and dimensions of your factory floor. 
4. reate walls or obstacles that reflect the same obstacles or hallways on your factory floor, please click the coordinate corresponding to these. "Create" sends the data of your grid to a database hosted on the AWS servers. If you want to create multiple grids, follow the same process. All of your grids should be listed on the home page as soon as you sign in.

## MQTT Instruction
https://university.ti.com/en/faculty/ti-robotics-system-learning-kit/ti-robotics-system-learning-kit
![RSLK](https://embeddedcomputing.weebly.com/uploads/1/1/6/2/11624344/rslk-1-1_orig.jpg)

To send a path to your RSLK robot for it to follow, click a grid you have already created. 
When your grid has loaded, click the coordinate square that corresponds to the location your robot is started at, as well as the coordinate square that corresponds to your robot's destination. Afterwards, check the radio button that corresponds to the robot you want to send the path to.
<br />
The corresponding the MQTT topic to the robot listens on a designated port. If you choose Robot 1, the web application will publish to the MQTT topic "robot/1", which Robot 1 is listening to. The case is the same for Robot 2, but the topic is called "robot/2". After you choose which robot you want to send your path to, choose the starting orientation of the robot is question. This is important in that the path sent to each of the robot also handles the various rotations the robot needs to take to get to its destination. 
<br />
Finally, press the "Send Path to Robot" button. This publishes the path to the corresponding MQTT topic, and the robot will go on its way since the robot will be listening in on this topic for a new path to follow. The starting and ending coordinates will then switch and the orientation will be reflective of the orientation of the robot when it reached the end of its previous path. To send the robot to a different node, all the user needs to do is deselect the new ending coordinate, and select the new coordinate the robot will travel to. 
