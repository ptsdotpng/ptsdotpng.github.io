//#region consts
const cnt = `# ( ._.)
welcome traveler.

## what is this?
this is my spot around these parts.

## who are you?
pts d. png. 
the d is for dot. 
nice to meet you

## what are you doing here?
i'm just building some small project. 
having a little fun away from it all
`
// data should be parsable from the cnt
const data = {
    title: "( ._.)",
    text: "welcome traveler",
    children: [
      {
        title: "what is this?",
        text: "this is my spot around these parts."
      },
      {
        title: "who are you?",
        text:`pts d. png. 
the d is for dot. 
nice to meet you`
      },
      {
        title: "what are you doing here?",
        text: `i'm just building some small project. 
having a little fun away from it all
        `
      },
    ]
}

//#endregion

// #region helpers
const html = (strings, ...exprs) => {
  return strings.reduce((p, c, i) => {
    return `${p}${c}${exprs[i] || ""}`
  }, "");
};



// #endregion

//#region main

// #region utils
const getChoices = t => {
  return t.hasOwnProperty("children") 
    ? t.children.map(c => c.title)
    : [`back`]
}


// #endregion
const main = (d) => {
  // #region init/state
  let trgt = d;
  let prnt = [];

  // TODO: get more outpus -> text + options seperated
  const output = document.getElementById("output")
  // TODO: rename?
  const inpt = document.getElementById("prompt");
  // #endregion


  // #region render
  const printOutput = (title, text, choices) => {

    output.innerHTML = html`
      <h1>${title}</h1>
      <div class="ctnt">
        ${text}
      </div>
      <ol>
        ${choices.map(c => `<li>> ${c}</li>`).join("\n")}
      </ol>
    `;
  };


  const print = (t) => {
    const choices = getChoices(t)
    printOutput(t.title, t.text, choices)
  }

  // TODO a little redudant with the print....
  // probably when i refactor the output a little more
  // we'll be able to update just the text without having to 
  // update the title/choices...
  const printError = (t, msg) => {
    const choices = getChoices(t)
    printOutput(t.title, msg, choices)
  };
  // #endregion

  // #region events
  const navTo = (prmpt) => {
    if(prmpt === "back") {
      if(prnt.length === 0) {
        printError(
          trgt, 
          'already at the top of the tree'
        );
        return;
      } else {
        trgt = prnt.pop()
        print(trgt)
      }
    }

    const choices = trgt.children.map(c => c.title)

    const idx = choices.indexOf(prmpt)

    if(idx === -1) {
      printError(
        trgt, 
        `i don't know: ${prmpt}<br/>please pick from the list below`
      );
      return;
    }

    prnt.push(trgt);
    trgt = trgt.children[idx]

    print(trgt)
  }
  // #endregion

  // #region init/cnt'd
  inpt.onkeyup = (e) => {
    if(e.key === "Enter") {
      navTo(inpt.value);
      inpt.value = "";
    }
  }

  print(trgt)
  inpt.focus()
  // #endregion
}

// assumes it has the preparsed md -> data
main(data);
//#endregion

//#region parser
// regex is hard
// lest jstu do it naively
// expecting:
// first line title
// rest of text -> text
// unless hit a ##, then reduce level and parse reste
const parse = (txt) => {
  const lines = txt.split("\n")
  console.log(lines)

  let title = lines[0]

  let  text, children;

  let chindx = txt.indexOf("##")
  if (chindx === -1) {
    return {title, text: txt.substr(title.length), children: []}
  } else {
    return {title, text: txt.substr(title.length, chindx), children: 
      txt.substr(chindx).split("##").map(s => {
        return parse("#" + s.replace("##", "#"))
      })
    
    }
  }
  console.log(chindx)


  return {
    title, text, children
  }
}
//#endregion

//#region ut
(() => {
  console.log("tests")
  const inpt = `# a header
some
markdown 

parapraphs

## subheader/prompts
with more
text 
`

  const output = parse(inpt)

  console.log(output)

})()
//#endregion