setTimeout(() => console.log('A'), 100);
setTimeout(() => console.log('B'), 500);
setTimeout(() => console.log('C'), 100);
setTimeout(() => console.log('D'), 0);
console.log('E');

// pile d'appels
// ^
// |            lg           lg    lg           lg
// |lg ..idle.. cbD ..idle.. cbA - cbC ..idle.. cbB
// +0-----------1------------100---101------------> temps
//  E           D            A     C            B

// file attente (0ms) : cbD
// file attente (1ms) :
// file attente (100ms) : cbA - cbC
// file attente (101ms) : cbC
// file attente (102ms) :
// file attente (500ms) : cbB
// file attente (501ms) :
// https://www.youtube.com/watch?v=cCOL7MC4Pl0



