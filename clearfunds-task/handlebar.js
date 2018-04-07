
  var source = $("#some-template").html();
  // Compile (package) HTML & Javascript
  var template = Handlebars.compile( source );
  // Data to be displayed
  var data = {
      tasks: [
          {
              name : "pratiksha",
              avatar : "https://media.licdn.com/dms/image/C5603AQEWOyrvYu82YQ/profile-displayphoto-shrink_200_200/0?e=1528142400&v=alpha&t=nLNAYfU6bJYAFZccr2d45hdURgsOwyT9g-yx6zwHYys"
          }, {
              name : "pratiksha",
              avatar : "https://media.licdn.com/dms/image/C5603AQEWOyrvYu82YQ/profile-displayphoto-shrink_200_200/0?e=1528142400&v=alpha&t=nLNAYfU6bJYAFZccr2d45hdURgsOwyT9g-yx6zwHYys"
          },
          {
              name : "pratiksha",
              avatar : "https://media.licdn.com/dms/image/C5603AQEWOyrvYu82YQ/profile-displayphoto-shrink_200_200/0?e=1528142400&v=alpha&t=nLNAYfU6bJYAFZccr2d45hdURgsOwyT9g-yx6zwHYys"
          },
          {
              name : "pratiksha",
              avatar : "https://media.licdn.com/dms/image/C5603AQEWOyrvYu82YQ/profile-displayphoto-shrink_200_200/0?e=1528142400&v=alpha&t=nLNAYfU6bJYAFZccr2d45hdURgsOwyT9g-yx6zwHYys"
          },
          {
              name : "pratiksha",
              avatar : "https://media.licdn.com/dms/image/C5603AQEWOyrvYu82YQ/profile-displayphoto-shrink_200_200/0?e=1528142400&v=alpha&t=nLNAYfU6bJYAFZccr2d45hdURgsOwyT9g-yx6zwHYys"
          },
          {
              name : "pratiksha",
              avatar : "https://media.licdn.com/dms/image/C5603AQEWOyrvYu82YQ/profile-displayphoto-shrink_200_200/0?e=1528142400&v=alpha&t=nLNAYfU6bJYAFZccr2d45hdURgsOwyT9g-yx6zwHYys"
          },
          {
              name : "pratiksha",
              avatar : "https://media.licdn.com/dms/image/C5603AQEWOyrvYu82YQ/profile-displayphoto-shrink_200_200/0?e=1528142400&v=alpha&t=nLNAYfU6bJYAFZccr2d45hdURgsOwyT9g-yx6zwHYys"
          },
          {
              name : "pratiksha",
              avatar : "https://media.licdn.com/dms/image/C5603AQEWOyrvYu82YQ/profile-displayphoto-shrink_200_200/0?e=1528142400&v=alpha&t=nLNAYfU6bJYAFZccr2d45hdURgsOwyT9g-yx6zwHYys"
          },
          {
              name : "pratiksha",
              avatar : "https://media.licdn.com/dms/image/C5603AQEWOyrvYu82YQ/profile-displayphoto-shrink_200_200/0?e=1528142400&v=alpha&t=nLNAYfU6bJYAFZccr2d45hdURgsOwyT9g-yx6zwHYys"
          },
          {
              name : "pratiksha",
              avatar : "https://media.licdn.com/dms/image/C5603AQEWOyrvYu82YQ/profile-displayphoto-shrink_200_200/0?e=1528142400&v=alpha&t=nLNAYfU6bJYAFZccr2d45hdURgsOwyT9g-yx6zwHYys"
          },
      ]
  };
  $("#content-placeholder").html( template( data ) ); 
  