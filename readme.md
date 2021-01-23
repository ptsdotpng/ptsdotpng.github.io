# pts.png
pts.png's about page.

# makingof
- going to try and setup a coding/monospace theme/layout. i have a feeling i'll push more terminal apps, interactions, etc... text/monospace/terminal will make sure i can have more standardize ui across different platforms.
- credit where credit is due. thank https://thomasf.github.io/solarized-css/ for the starting point with the color codes
- getting hungry... we'll get back to this tomorrow

# todo
- setup 


# what is the steam about
- easier to parse out a couple of things:
- most basic reason - it's fun/entertaining/enjoyable to do. dipped my toe in the streaming pool last year. plans got disrupted a little. like for a lot of people... but it was fun. so lets try again, it's a new year, as good a time as any
- it's a fun way to do/frame side projects. 
- it would be fun to have a long term?/continuous project instead of a ponctual one? like build an app. app will have feature creep, deliveries,accumulation of cruft, etc... but streaming is just the doing in itself. if i'm going to stream according to a scheduel, i have to do it on that schedule. i can't find a clever solution to not implement something, or change requirements, get stuck with a bug, issue, design flaw... it just has to be done.
- i want to try a few different projets. well more than a few. havaing an external force selecting one to focus on might be beneficial. it's not like having a boss or client, but it could be fun to have enough of an audience to have actual people want to have a certain project to continue.
- there are a couple of fun things/project/concepts that i need to work out a bit more before trying them out, but they are related to streaming so... yeah, i need to actually stream to try them
- because of teh pandemic/lockdowns/etc... i work from home. so have about 2hrs of commute i don't need to do. it'd be nice to have something positive to look back to. that i used this additional time for something more than just more tv/games/whatever i spend all my time on... so hard to tell when everythnig blurs together




# writing it out
it'll probably - hopefully help.
so i'm trying to figure out what exactly to parse out, when, and to what format.

i want to parse the given markdown in order to:
- split out headers, and collect all of the to get a list of prompts
- so i would start at the first one. and all the other headers become a list of propts/actions that the user can use - like questions in adventure games, rpgs, etc...
- once a user gets to one level, the root text gets printed. 
- and if there are lower lever headings  - theses become a nes prompt - unless at the highest level....
lets not pormpt - but get all in one functino. esasier..?

brain is a little mushy
it would be fun to abuse the templating...

- trying precommute stream...
- going to change the strucutre. first get the whole things working, then figure out how to parse it from simple markdown

- somewhat working... very messy, but at least it's kinda working. 
- we've reached the end of the commute, gotta get to wokr :( but the general approach is hard, the md parsing is a little annoying, and if we don't even know what data structre we need to get things to kinda work, there's not much to latch on to and we end up going in cirlces a little bit. we'll get to refactoring a little later. also imprgint the style a little does make things more motivating. 

## review
so here's what we have for now:
- a consoleish window
- some text and prompts
- and being able to go up and down teh texts
- it's very messy, but got us there. we're going to have to do a littl refactoring if we want to get to our next steps
- first thing is we're going to split out the js, and try to get those ui update undecontrol. there are a couple of things we can do make our exp a little more enjoyable once it's split up.
- oh yeah, we're splitting it up just because things run a little more smoothly in vscode, but i still want the whole things to be a single html file, like the build/output at the end should be shippable in a single file.
- so with a litte template literal we can havesyntax highlight in our js files. more tha tusual, with syntax for html literals. the perf hit shoudl be negligeable, and at worse, since they don't actually do aything, we could just remove all those html` before shipping...

# parse/data/io
so i'm going to do a pseudo markdown parse.
the input doc format should be pretty simple. 
```
# a header
some
markdown 

parapraphs

## subheader/prompts
with more
text 

and more 
paragraphs

### and their own prompt
with test

### another 
asdsadasd

## going back up
with test always

## or maybe no text
### but prompts
```

this should be parse to the data structure:
```js
node = {
    title: "",
    text: "",
    children: [nodes?]
}
```

now that i think about it, change the data to always have children, just maybe null/empty

as is tradition, lets make things more complicated than they need to be...

so progress, but gotta eat. brb
hopefullt