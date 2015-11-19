var something, another;

something = {

  x : 'x',

  print : function( callback ){
    callback && callback.call( this );
    console.log( this.x );
  }
};

another = {

  x : 'a',

  set_x : function(){
    this.x = 'b';
  }
};

// situation a
something.print( function(){
  another.set_x();
});

// situation b
something.print( another.set_x );

// situation c
something.print( function(){
  another.set_x.call( this );
});


var example = {
  
  name : 'who',
  
  wrong : function(){
    setTimeout( function(){
      console.log( this.name );
    }, 0 );
  },
  
  right : function(){
    var self = this;
    
    setTimeout( function(){
      console.log( self.name );
    }, 0 );
  }
};

example.wrong();
example.right();
