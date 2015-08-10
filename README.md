Möll's Disco of NativeScript
============================
This is [me][] debugging [NativeScript][] and waiting for lunch. Join the ride.

If you like it, invite me to your conference and/or get me a plate of
[вареники][pelmeen]. You do have a conference, right?  Everybody's got
to have one. And a hackathon. Did you know you can solve any NP problem with
a hackathon these days? Yeah. Even social issues. Poverty? Case of too little
hackathonitis.

## Using
Install [NativeScript][] globally via NPM:
```sh
npm install --global nativescript
```

Compile the disco:
```sh
make compile
```

**There is a storyboard involved**. You'll have to add that to the generated
Xcode project manually, because it seems Xcode is such a great application that
it has its own concept of your project files and its folders. And who needs
a command line interface to add files to your project?  Long haired
<strike>freaky</strike> Unix people need not apply.

While you have this gift from gods open and it has finished downloading 13
gigabytes of documentation, you might as well compile and run the app from
within Xcode. It's precisely 11 times faster than [NativeScript's
CLI][nativescript-cli].

Then again, if you've spent all of your allowance on a fast computer and can
now only afford [вареники][pelmeen], feel free to run it from the CLI:
```
make run
```

[me]: http://m811.com
[nativescript]: http://nativescript.org
[nativescript-cli]: https://github.com/NativeScript/nativescript-cli
[pelmeen]: https://en.wikipedia.org/wiki/Varenyky

Note that **NativeScript is a little finicky at the moment with directory
names**.  You _may_ have to rename the current directory to
`NativeScriptDisco`. Take it up with NativeScript. I would, but I'm busy in the kitchen.

### Adding Storyboards to Xcode
Not a certified Xcode developer? That's alright. I'll walk you through.

1. Open Xcode by sextuple-clicking (just to be sure) on the generated project
   file in `platforms/ios`.
2. Fry and eat some [вареники][pelmeen] with sour cream while Xcode opens.
3. Click on the microscopic plus symbol on the lower left of the window.  
   If you don't see it, then you've passed the test and have healthy vision.
4. Select "Add Files", find `pages.storyboard` in the `platforms` directory and
   add it.
5. Press fingers on Command-R to test and run the app in the simulator.

If any issues remain, don't look at me. I'm eating.


UIPageViewController
--------------------
Currently the first thing that shows up. Implemented in `app/pages.js`.

### `EXC_BAD_ACCESS` on Memory Warning
- Swipe a little to the right in the simulator.
- Press Command-Shift-M to trigger a memory warning. Spot `EXC_BAD_ACCESS`.


About
-----
**[Andri Möll](http://themoll.com)** peckered this and the code.  
[Monday Calendar](https://mondayapp.com) supported the engineering work.

If you find the Disco needs better songs, hesitate to type to me now at [andri@dot.ee](mailto:andri@dot.ee). Also, I don't know what Twitter is for.
