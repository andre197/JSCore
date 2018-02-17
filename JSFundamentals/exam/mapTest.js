function mapTest() {
    let m = new Map();
    m.set('a', new Map().set('a', {name: 'gosho'}));
    m.set('c', new Map().set('a', {name: 'pesho'}));
    m.set('b', new Map().set('a', {name: 'stoqn' }));

    let keys = Array.from(m.keys());

    console.log(keys.sort((a,b)=>{
        let c = 'c';
        let d = 'd';
        return c<d
    }));
    
    
    
}

mapTest();