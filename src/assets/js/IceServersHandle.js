// IceServersHandler.js

var IceServersHandle = (function() {
    function getIceServers(connection) {
        // resiprocate: 3344+4433
        // pions: 7575
        var iceServers = [{
 credential: ['7509300e-8611-11eb-a6a8-0242ac140004', 'd87acec6-7d98-11eb-a078-0242ac140004', 'muazkh'],
username: ['V9UJO75BAayb3gqi_dwhcV_4S2_uwFh8aVVjmsS6aLP4tIK_V0keAlfutQk2BXfGAAAAAGBQNkZkb2N0b3JiaGF0dGkx', 'Y2oZqTcZDCTwEEC0G1lnathSGW7S-zuNuFNRpgC26-s7zbzToOZVHoXUKHJxWv6BAAAAAGBB__Jkb2N0b3JiaGF0dGk=', 'webrtc@live.com'],
 urls: ['stun:stun.l.google.com:19302',
                'stun:stun1.l.google.com:19302',
                'stun:stun2.l.google.com:19302',
               'stun:stun.l.google.com:19302?transport=udp',
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
                    'turn:turn02.hubl.in?transport=tcp']},
                    ]
          
     return iceServers
    }

    return {
        getIceServers: getIceServers
    };
})();