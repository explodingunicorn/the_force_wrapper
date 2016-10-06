WebMidi.enable(function(err) {

    if (err) console.log("WebMidi could not be enabled");

    console.log(WebMidi.inputs);

    var input = WebMidi.inputs[0];

    // Listening for a 'note on' message (on all channels)
    input.addListener('noteon', "all", test);

    // Listening for a 'note on' message (on channel 1 only)
    input.addListener('noteon', 1, test);

    input.addListener('controlchange', "all",
      function (e) {
        console.log("Received 'controlchange' message.", e);
      }
    );

    function test(e) {
      console.log(e);
    }

    console.log(input.hasListener('noteon', "all", test));

    // Listening to other messages works the same way
    // input.addListener('noteoff', "all",
    //   function(e){ console.log(e); }
    // );
    //
    // input.addListener('pitchbend', "all",
    //   function(e){ console.log(e); }
    // );


}

);
