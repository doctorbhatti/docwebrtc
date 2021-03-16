// IceServersHandler.js
export default {
  getIceServerMain() { 
  
  return {

  iceServers: [{
              urls: ['stun:ss-turn2.xirsys.com']
      }, {
        username: 'Y2oZqTcZDCTwEEC0G1lnathSGW7S-zuNuFNRpgC26-s7zbzToOZVHoXUKHJxWv6BAAAAAGBB__Jkb2N0b3JiaGF0dGk=',
        credential: 'd87acec6-7d98-11eb-a078-0242ac140004',
        urls: [
          'turn:ss-turn2.xirsys.com:80?transport=udp',
          'turn:ss-turn2.xirsys.com:3478?transport=udp',
          'turn:ss-turn2.xirsys.com:80?transport=tcp',
          'turn:ss-turn2.xirsys.com:3478?transport=tcp',
          'turns:ss-turn2.xirsys.com:443?transport=tcp',
          'turns:ss-turn2.xirsys.com:5349?transport=tcp'
        ]
        }]
  }},
       getIceServerAlt(){
         return {
  iceServers2: [{
          
     urls: ['turn:ms-m1.xirsys.com', 'stun:ss-turn2.xirsys.com', 'turn:numb.viagenie.ca']
      }, {
 usernames: ['V9UJO75BAayb3gqi_dwhcV_4S2_uwFh8aVVjmsS6aLP4tIK_V0keAlfutQk2BXfGAAAAAGBQNkZkb2N0b3JiaGF0dGkx', 'Y2oZqTcZDCTwEEC0G1lnathSGW7S-zuNuFNRpgC26-s7zbzToOZVHoXUKHJxWv6BAAAAAGBB__Jkb2N0b3JiaGF0dGk=', 'webrtc@live.com'],
  credentials: ['7509300e-8611-11eb-a6a8-0242ac140004', 'd87acec6-7d98-11eb-a078-0242ac140004', 'muazkh'],
      'urls': [       
        "turn:ms-m1.xirsys.com:80?transport=udp",
       "turn:ms-m1.xirsys.com:3478?transport=udp",
       "turn:ms-m1.xirsys.com:80?transport=tcp",
       "turn:ms-m1.xirsys.com:3478?transport=tcp",
       "turns:ms-m1.xirsys.com:443?transport=tcp",
       "turns:ms-m1.xirsys.com:5349?transport=tcp",
        'turn:ss-turn2.xirsys.com:80?transport=udp',
          'turn:ss-turn2.xirsys.com:3478?transport=udp',
          'turn:ss-turn2.xirsys.com:80?transport=tcp',
          'turn:ss-turn2.xirsys.com:3478?transport=tcp',
          'turns:ss-turn2.xirsys.com:443?transport=tcp',
          'turns:ss-turn2.xirsys.com:5349?transport=tcp',
          'turn:turn01.hubl.in?transport=udp',
          'turn:turn02.hubl.in?transport=tcp',

            ]
        
        }]
         }
       },
}
