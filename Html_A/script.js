const switcher = [...document.querySelectorAll('.switcher')];


// get the input from the email field
const email = document.getElementById('email');
const password = document.getElementById('password');

switcher.forEach(item => {
  item.addEventListener('click', function () {
    switcher.forEach(item => item.parentElement.classList.remove('is-active'))
    this.parentElement.classList.add('is-active')
  })
})

//make an array that contains 5 images
var images = [
 "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYZGBgZGRoYHBgYGhgYGRoYGhgZGRoZGhocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQsJCs0NDQ0NjQ1NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ2NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADUQAAEDAgQEBAUDBAMBAAAAAAEAAhEDIQQSMUEFUWFxIoGRsROhwdHwMuHxBhRCUmJykhX/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACgRAAICAgICAQMEAwAAAAAAAAABAhESIQMxQVEiE2FxBDJCgZGhwf/aAAwDAQACEQMRAD8A8+0IwhCNq5DINoRgIWoggCwjaEICY0IESETQryq2tQAbQiAVAIgEBZYCgCgRBAECIFVCkIsLClRDCuEWFklVKkKiEWFlEoSURCohFisCVRKOEJCB2AShJRFCUrCyigJRlAQiwsElAURCEpgCUJREISgdi3ISjcEBCYAQorUQAYCY1CAjASEECiCEBG0IEG1MalhqNoQAYRhC0IwgYQVhUFYCACVhQBXCBEUBVQpCACVoQFcIAsoSrIQEKQLQkIgpCAAUIRZVRCAFOCAhNIQEIAWUJTCEJagBZQOTS1LcFQAFCURaqc1AxbkBTCEBCAFqIoUQMeGo2tVtajAQNooMTWsVAJjQgRQaia1FlRBqAIAiDVA1EAgRQajDEbWog1FDoENVhqYGq4ToVC8qmRNDVAEqCgBTRCmmgKQnQ6FZAhdTTioWooBHw1PhrVRw7nmGgkrrUODCJe4zyEW801FvoajZ5/4aBzF6n/5tEbE+ZS34GjyjzKbgx4HmDSVfBXfrcKaf0O8j91yqzC0kOEEKHFoeKXZiNJD8NaSUtxSpi0JLAhNMI3FUSUUwtCnUwhNJG4oS9FMehbqSQ+ktJehc5GwpGX4aifmURbCkW0qw5Ja9C56ZDZrBTWOWRhTGuhAWa5VsWZj0zNCAs1KBIFRWx6LFZrajASGvWnCXcJ01KY07Y+jhHu0ae+y30OHMBGcknloFlxXFSRkZrMclgfjojxSTtyKlzS6OmHD7PSgMAgBoCW7AU36WPT7LzjMeZkyRK3cPx4qPc1pgtNgbIXJb6LfFo21eFEaOlc11rLsvxREehXO4hTg5xo7aIhU5Lwc84Yq0Z2JraeYgDUrMHLXh6uRpeSOQCFJLsiCcnSOmx4pNyg3WA8Wh+UmYE9lymYtz3Oc47wB9SsuGYS97t5AHv9VD5G3o7FxqK2dp+Me8w3uTcBVSxQzZXOE6gTdYquGe4ZMxYDqWwSfVZ+H/ANNClUD3VHuPI79+arb2LR6KjUgmTCDi7MzGv3Fp5haMRiqLGS9wbaL7z7rmYeux7HMp1RU/U5t/E1tiG9QL3V7SM5pNHNcUDnKPSnFZ2cxZcqLkoqFFgmW5yW4qFAUWFluKAlQlASmOy1EvMogLFSiaFGBPa1AqIwoyVbGq3tQFF0k0hLZZNDkCCaxEArJQkoBoY1E+vkBcTEe6jdFyOP1TDW6DXuVJpxRuRqxL35HOZEuGp0vqVq/pjhzizM8+I8+X5dZuGYoPYAQCRAiYCH+oeLvosayk4A6EjXrCSVvE7ZOlZ6Z/D2NsDHsT5rij+n2trfE8RvMAkEHuLwuDwLjlZ9QMe+Wm552XuhUztkGC3cQnKOLpEqVqzQcOC3UgxuuGzHH4r6L4vGV3/KLT3S63Gs7HXdIdE847LzdTF56hdoR7pfgtRtU/J6xLxz/COQ91opeJjX/7NB891owWF+I4NIkansm45LRxwf050zy1DFeMjaPZdHD1Q17ja5EDyEpPH+FCnUzUwcptCwUqhBvqpaxZ2tqSPRt4pAABA67on41rQXXJ5leS45nyAtJ1ExyWGlUqkZQ8lpbIOuhEjuJC0inJXZlW6N3H8Uatjrsmf0JgT/c53aMa7fdwj0vPkuThOHVKrwzMQZmek3XbwxZRqltEug+GcxIk2JHK6tyxVCxbZ3ce0B5A7rGU3FOLjKQAs7OSXZTgqCJ91A1MSFPCU4o6spYapHWwCVTlb2IXssnZWItRD8NRFixIxPY9LykWKNjEydl/ERh6plCSn1MIW32UuSTphjJ7EhycHQozDkiYVigSi0GLCbVCoPkqCgrbRQKmOD4XB/qCp4wOn57LvtpSFWI4IyvlL3FuXdsSRyuENqLtmvDqR5nh2ZoLgYv+FO4tiA8tbBl0wdpjQHuu3xDg7abAGAxrJMyVx6FEl4a7QHMOmUgkfJOLuVnZVrRx8GHteMrbyu+/idV4bSYQ3OJe7cMnntbzTsBTY2oHHp7lZsbQNIP0lziBzyAyPW3daSS7BwrQ1kTlbp+QsPEMC+m4HI4h4lsAmYsR3+4XQ4NQ8QJ1X07D4Zj6bQR+kWIsRZZwVt0OcsUjxnCi8UGNeCCAbGQYm1jpb2XpMAzJTzbu+QXOr4N3xcgBJnuuli62XwcrLSKrs418pORyOIQ5ebxlO8rvYt8brkYl4AJP5ZYy7OiJlFZpGV2kLl1cK6k4PYJBB6jtrfb0T6ovK2cLY13hdeflO6cW49FNGzgmKpFweLEatOxiCD0W1+FYxxOQB2sxGvfRaeF8ApZw+5I7WT+PUMj52dcLWXyjbRjyy1o5wISHaogUJWRzWA+yFr7K6glA8KgBc5JDk54ssznJWAUoKhKoPK0UqGYSk2oq2XFSlpGWVFodQURnEKkbqjGOJ580ilRv05qQZutBfYALnTlFUjrkoz3VFCkQtWcRdZg4gq2i8c0STkTGos3YZohNbQANglMIAgm6I1su6xt5aOlRio3IXicNewSm4dw2WlmKzarTh6gzLWXLKOjBcEZW0zLSw8rbh8LGuqF9YSYTqbyb6Jx5XJpB9FQ77EcUjLC8lVOV3ey9JxGvAK85iIPuuhy+Wi+O0rE5CDM2ScVVL3Sb8p2CN1O9tEgNMx10TcrNZSvVHRwD8pBOn5qvccI4jYCV4Ci4i0wu5wzFEQbKFJxlaM5RyR7l8BxfaYiV57HVvFPNMqcRluWVgq1J0WspJrRjjQD6gNlz62FmY01grY5Ke0/468uazGtHGq4e+hGo80WEwpD5bbZdMVGk3EGd+tvsiEAnvp6D6Jjs9Bwp4a3WTutHG6Rexp5H6LmYCtHVdPiLi6lA1JEfNaOXwf4M8cpJM88zCEarPVEEroUapyw+xCGq1p2lcseSXkrk4Yp1E5rHCEJeJW5tEAGAhOGYRO6tT2ZPidGWmGuN0GLw7YkIzhoOqccoERNlE28k0y4RTi4tf2caN0ynVOgTX0inUqbW91U5KiOKDy9GMteotvxAos836NvoL2IY8lNp1CDcJTGvHcoqlcjX10MLS70QoWrvZtpFtidSnwB4mxPVc5rZEprntMZQeSynFro6OGUZSSkjotpF8mADzGhSK1MgxzUptcwAOO9vdG/Eg30IsSVEZtGvLwZO0yGmRAi6fh6Tr5rclmdiid781HvLmkEnlI2RK5PRMYRgtshq5XFpC34NhIL75QI81zcPQnK1xJm0nXsu+9gZTyjb3W/FBXfo55Sk3t2jiY68/suJiafXy0ldDiNY6Lil591fbNY6RoZ11VNpyT3+WxWf4sbqMq632ToLLGt7clpoYv7LkGoXaJzHEJuI0zuUMTLiugyYlee4dU8Tu69BhngtuhRozkyVXgC5vy1WX+6gzFhzW4MJ/TDfdZOJ0i1niMyNT9UV5J0Ia8Oh2wPvE+h91MVVyvDtnC+0HT9/Vcym/IQ0enOdfon1q4JaD/sL+tigDv4DEgkAi67nEKcUg4aA7dQvOYB7XGYkzqvVYcBzC2NRve+xVqOUXH2TljJSR5vEPzRva6dkyAHX2WR4dMC5n5pT6j5AmROhXI+OVUmOPKlJuS7Hf3BEiIBO6CnWBJnbZD/cm7XDM0jzCCiAJPmjeLpbK0pK3aDxUiMtwQqazzMJprNcyXC31WZlcCCJ1Av91KcmvuU1GMm30+hlMAEZ+6z1agJJGiuu4azrskMLZga+quKp2wcXJVFAQonNojmqTyRH0mLpVXAE3nZ335hG95cQH35SPmsbXll3OntutGExxLyTYcz2/lJrykdKTpu9e2aqDM5LINpExZMyFpkwPc/ZIa8ucfESBfcD91vp1xmhxaREX2UybqiI8cU1L0Ia8u0BPYTfutBAJOdp6gX8ys3xgLNJ1teBqY+Sa7EEXd3Bbc66bSli7oqU4uLa9jmU2FrsoNuf7qmYV8kghwJ/Ty/ZLOIGre5ndMe9wlzRcixkE/zdDcokxjx8jpOmbcMWNcWnxObueY5BNxdfw91kboXk3iDMTPVSo6QDquiD+JlKNSr0cjFsCxVaIglbsW2TcfwsWKeMhQi30cZ9Q5kwv8BWMugqGtYhb4meR0ME2VsLQNVi4U+y2YoeA89ZWb7NI9GNlWHxsvQ4Op4Zm0rxr6niBXc4XiwfCddlTjozb2eqwlSVOO4fPRPMX9LrHh33XWrNzU3N/wCJ9kovwJryeCe/rsox+Zw5oQ0T8lp+DlAdCOhnX4W+DC9dg6hEcl4fC1PECvX8HfIhOL2S0criNYse6P8Ab5LO9xJzEESJ5dituPxTSXkAF02J0MfTqsNSoNCewGl7d1z5LJtIqXFqnLfod8RjWgQCSLnvpdc7EVMgzQJnTW3OOSP4oNrWEweR07Ln1Q5zp5dTpJjTyURy2dP0YRac2qXX3O0aAewGzHGJuY9EnE0crb3n/XQlYGV3eEE2iTvfp0WgU35ZJeRtMQRsYSUZLsiX0nbixYfEiASOapkWgXPyTM45DQG4+/VQVmgAt1O2t9yEO9to1yhSjx6K+Cor+JOpCiWyah9v8nOc+WXAzCAJ32vHv0VMeTcaRoPT1UDjv9/zdPwwYCcwJBMwDE6em66UlE43OU3TZfxDFjH08j5rPTfFQH/GIOuux9vVdEZIDg03/wASZJ10WesxrnEsMReDaB3CSf2Lxcdt2vyBUeSDlnlYW/aZjzW3M4NuBIbMiT6mNVmZSynMTJ6dQiOY6kiNB0Uyje0HHyYJxaLZWJFrERY8uS1UK8PnNF8sH5n3SAwkEgAkGSCYOn3CoUxEkGTfXTpEW0VaMkqVmp/E6bWmGkki5Mmbi5jTdOpYghg8MHlyWRjACC0lpI1HzWx+JtYnT16pSbXSNYSUv3Mw4iqXW81ysfUAGUFd4szEHciTbe0D0WOjgG58z7NzTI1gTHlonF1tjlK/ijzmEw4qVMjnZZDo/wC0GJ5DfyWN9F8uBaQWmCDzJiPr2C9nV4RTbL2E3sARH+QM/RMY5wESGxpIJJkWtH5AV/V3a6E41Gn2n/o83wymbwJHPzifkt9eg+LtdHYr0mGovIzta0wP1ESTFrA7a+aTicUXEseI7QLayVjLmblUUaxioxts8HVoS6CYEgf+jCfTpuY4TYh3PsPeV6H+0a46B0mRAmY3+fyS34YOJOpFyInz9V0qejlcrejRhq51G8Qu/gapJgrzlF+RoJH6SB7rs4bHgNaQJnXtf6j0Wa0y80zy2Mp5a1QRAzkDydt5StzHeAhw5R3v+y1YqiHkvLSYiSev8fNEzCHIXQYi4vr/ALeycpRJTb6MWDEEh3Neg4NispjWI91xsku+YHLf1lacFigx4JESbj5T2sldOxxldoPEuBe4Cf1PPYSdPKEqoY1v1vEbQixpl2azcxz9mkl31Wdz3a+23ltYQijFsJgGgAnTQXFypUaJFoNpHa10sP0k6T57FU95vHI+u3tKhRqV2bz5lKCikEH6HS8Wtzv8lH4g6ZjzSiYhrfXSR2S4BubR67WlWYeQ3vkXMnvos9YCYB2k9BB/ZNJGmgF/XbsgcRcTrqfzyQhtC845Kk2GjU+32USv7F4L2iw0N8R5/wApgLZnpbr+SiZRAbLryhqgCI0SU03Q3xySyNmH0s0T11hDXptyl4buJA36j1WZmKgEj85pjMRLSIs5ZyjLK0brk43DFrf/AEjHkEToLeWv1RtqeG2u37pDpBsDG/7LQGCIsPyytoxhJ3ogqz1OhHTurp1IttM37KvDlJnTlunso+Eacxf6JXRbhKVui6RBIbFo1+v5zUpUrS0mZseg/ZXUp5csGJEn7JB3yny6JmdeTVkMAZpBE6+6EBp1voI5HpOqz0HEmIdBn87J76TmAOkCL2OilySHGN72zSwiCMps3U8xv0SXMgNh2aBMcryPNXSe4eIWn27JbzcmIkHpdSk15NJtOlT0hrsU5oDWm4HPUlBWgguzQZh2942/N1VGhvJsFK+HIaRFiAdfnKa41HYp8mcVFKqDe8OAIIsI6aCAg+EybX941hK+BAtp6BAKRkA7WHUdfNWrMHSZrpMdJgCQC6NyLCPdHVdDA4akxlIsIsdFj+GQ6ZuDqmtk5i4yYsJsLqXGTlZpGSUWinVSBlHOT8rdvuirV5AuZm4HIbhIdUmABBBQmoXEgDpMaxyQ0m7Yk5JNJ6LYDrH8G3qjqUhIBA7q35iLeQO3klZw0nWXX59Crt+BY492h9UTF9p6W5rOHXtbrqCmMfM37D6IHO3jS0QqszaElsjz2/PyUM9xt5HmnOp3LucTr5KN6yeulrWSseIhwI3N+Qm/0WlmAJvmE9iVnByyWiZjW+2vfRCKrm3Lv1SegG0KJZ/x0dEI8P8AJgPwbw8NJJJuIs358kb8C8XBB8+Xkl1a73ZfFEbi89Cmf3Dxpv8AIo+euga4ndt/YxqJ2ZxUW1nKU2qYhbGUnPG0Bc41YNkfxyNDZZuPpHUqqpMaBDoMLXSeAdlz2G0prAm1rZkpVK0bGPBOuiW1/iskOEaI2uRQsjW6nqQELn2HLRLp1LJrItbzU1eminJLcWW6oHRJNrJgeAARCVUeJkD0Vt1VeCOn7HtqHTZU+mDY81TjLdCEArZrfIqHFNFqbTq9DXY1osGh0LQ+vLASIKw0yGnaEym7MTm8lkuJqV+jp5P1EJRxSoMm0ib6p2HxAaIiTEa29Fb6sgAAWGyVSNiVs1aOSLp2mVVq5rZR5WQPNwdh7q3uEjmtVMMIg3PNLJRQ8XKRhd4nfMKF02Oye7DgWDro8zMpafXql9RFr9PK9invsMplwtJ7JmGw5yyCB1O6x1WhpiZt280lmMc5uUCA2w5lHJtfE04INy+Wjc/CFpzyHc+Y6rM57TYNjqU2jUJF9YSXMgzolxW07H+q1JK7FtfBn+I5pralp8jCsZc0xsiDmkm9lbm1qjCPGmrtWZX1yDzCgrSLW3/YI3UWiZdultwx/wASO3RNNIlpt0AJOm2+k/dFiMOSf1AkDTYIXU8p1Uc6Ab3KbtvTBYpbM+QzB53joiLJvOm31U0gqw8AppiUbYlzSrROlROx4GU7p9LRRRNkjGaKU1aiTAa3VG/RRRICN1T9lFEIkGjqrd+oKKKZdG/D3/RpSn7KKKV2iZFHTzRqKKo+SJeAqSa3TzVqKkJCRqjaoospdGkOxjvosVTdRRZI7I/uQGM0CSz9QVqLVdErt/k1sQV9VFFUejj5OyO+iUoorJCqaoHKKIGxDtUkqlEehewquigUUQ+io/uGtUUUWZ1H/9k=",
 "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mops_oct09_cropped2.jpg/800px-Mops_oct09_cropped2.jpg",
 "data:image/jpeg;base64,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",
 "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201030094143-stock-rhodesian-ridgeback.jpg",
 "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12153852/American-Eskimo-Dog-standing-in-the-grass-in-bright-sunlight-400x267.jpg"
  ];


function show() {
  document.getElementById('image').style.display = 'block';

  document.getElementById('btnID').style.display = 'none';

  document.getElementById('btnID2').style.display = 'block';

  document.getElementById('header').style.display = 'none';

  document.getElementById('header2').style.display = 'block';

  var random = Math.floor(Math.random() * 4);

  document.getElementById('image').src = images[random];
}

function hide() {
  document.getElementById('image').style.display = 'none';

  document.getElementById('btnID').style.display = 'block';

  document.getElementById('btnID2').style.display = 'none';

  document.getElementById('header').style.display = 'block';

  document.getElementById('header2').style.display = 'none';
}

function saveData() {
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;
  console.log('email: ' + email + ' password: ' + password);

  document.getElementById('email-value').innerHTML = "Email: " + email;
  document.getElementById('password-value').innerHTML = "Password: " + password;

  document.getElementById("email-value").style.display = "block";

  document.getElementById("password-value").style.display = "block";
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


document.addEventListener('DOMContentLoaded', (event) => {

  
function handleDrop(e) {
  e.stopPropagation(); // stops the browser from redirecting.

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  
  return false;
}

  function handleDragStart(e) {
    this.style.opacity = '0.4';

    
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';

    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    e.preventDefault();
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  let items = document.querySelectorAll('.container3 .box');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
  

  var container = document.querySelector('.container3');
  for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }

  // make an array that saves the order of the boxes after randomizing
  var order = [];
  for (var i = 0; i < items.length; i++) {
    order.push(items[i].innerHTML);
  }

  console.log(order);

  //make it so the user can click the button to check if the boxes are in the correct order
  document.getElementById('match_check').addEventListener('click', function() {
    var correct = true;
    for (var i = 0; i < items.length; i++) {
      if (items[i].innerHTML != order[i]) {
        correct = false;
      }
    }
    if (correct) {
      alert('You got it right!');
    } else {
      alert('Try again!');
    }
  });
});



// make it so a slider will adjust the size of the circle
function drawCircle2() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var slider = document.getElementById('myRange');
  var sliderColor = document.getElementById('myRange2');
  var size = slider.value;
  var color = sliderColor.value;


  switch (color) {
    case "0":
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
    case "10":
      ctx.fillStyle = "red";
      ctx.strokeStyle = "red";
      break;
    case "20":
      ctx.fillStyle = "orange";
      ctx.strokeStyle = "orange";
      break;
    case "30":
      ctx.fillStyle = "yellow";
      ctx.strokeStyle = "yellow";
      break;
    case "40":
      ctx.fillStyle = "green";
      ctx.strokeStyle = "green";
      break;
    case "50":
      ctx.fillStyle = "cyan";
      ctx.strokeStyle = "cyan";
      break;
    case "60":
      ctx.fillStyle = "blue";
      ctx.strokeStyle = "blue";
      break;
    case "70":
      ctx.fillStyle = "pink";
      ctx.strokeStyle = "pink";
      break;
    case "80":
      ctx.fillStyle = "purple";
      ctx.strokeStyle = "purple";
      break;
    case "90":
      ctx.fillStyle = "grey";
      ctx.strokeStyle = "grey";
      break;
    case "100":
      ctx.fillStyle = "black";
      ctx.strokeStyle = "black";
      break;
  }

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, size, 0, 2 * Math.PI);
  ctx.rect(canvas.width / 2, canvas.height / 2, size, 0, 2);
  ctx.stroke();
  //ctx.fill();
}

//make the slider change the value of rangeValue2 to be a string
function changeValue() {
  var slider = document.getElementById('myRange2');
  var rangeValue2 = document.getElementById('rangeValue2');
  rangeValue2.innerHTML = slider.value;

  switch (slider.value) {
    case '0':
      rangeValue2.innerHTML = 'White';
      rangeValue2.style.color = 'white';
      rangeValue2.style.textShadow = '0px 0px 10px white';
      break;
    case '10':
      rangeValue2.innerHTML = 'Red';
      rangeValue2.style.color = 'red';
      rangeValue2.style.textShadow = '0px 0px 10px red';
      break;
    case '20':
      rangeValue2.innerHTML = 'Orange';
      rangeValue2.style.color = 'orange';
      rangeValue2.style.textShadow = '0px 0px 10px orange';
      break;
    case '30':
      rangeValue2.innerHTML = 'Yellow';
      rangeValue2.style.color = 'yellow';
      rangeValue2.style.textShadow = '0px 0px 10px yellow';
      break;
    case '40':
      rangeValue2.innerHTML = 'Green';
      rangeValue2.style.color = 'green';
      rangeValue2.style.textShadow = '0px 0px 10px green';
      break;
    case '50':
      rangeValue2.innerHTML = 'Cyan';
      rangeValue2.style.color = 'cyan';
      rangeValue2.style.textShadow = '0px 0px 10px cyan';
      break;
    case '60':
      rangeValue2.innerHTML = 'Blue';
      rangeValue2.style.color = 'blue';
      rangeValue2.style.textShadow = '0px 0px 10px blue';
      break;
    case '70':
      rangeValue2.innerHTML = 'Pink';
      rangeValue2.style.color = 'pink';
      rangeValue2.style.textShadow = '0px 0px 10px pink';
      break;
    case '80':
      rangeValue2.innerHTML = 'Purple';
      rangeValue2.style.color = 'purple';
      rangeValue2.style.textShadow = '0px 0px 10px purple';
      break;
    case '90':
      rangeValue2.innerHTML = 'Grey';
      rangeValue2.style.color = 'grey';
      rangeValue2.style.textShadow = '0px 0px 10px grey';
      break;
    case '100':
      rangeValue2.innerHTML = 'Black';
      rangeValue2.style.color = 'black';
      rangeValue2.style.textShadow = '0px 0px 10px goldenrod';
      break;
  }   
} 

// function printNumbers() {
//   var i = 1;

//   function print() {
//     console.log(i);
//     i++;
//     if (i <= 10) {
//       print();
//     }
//   }
//   print();
// }


// change the color of the slider as it moves
// function changeColor() {
//   var slider = document.getElementById("myRange");
//   var output = document.getElementById("demo");
//   output.innerHTML = slider.value;
//   if (slider.value < 33) {
//     slider.style.background = "red";
//   } else if (slider.value < 66) {
//     slider.style.background = "yellow";
//   } else {
//     slider.style.background = "green";
//   }
// }

// function changeCanvasColor() {
//   var canvas = document.getElementById("canvas");
//   var ctx = canvas.getContext("2d");
//   var slider = document.getElementById("myRange2");

//   //change the color of the canvas based on the value of the slider
//   if (slider.value < 33) {
//     canvas.fillStyle = "red";
//   } else if (slider.value < 66) {
//     canvas.fillStyle = "yellow";
//   } else {
//     canvas.fillStyle = "green";
//   }
// } 
