# Immaterial Foundry
An interactive, browser-based story in HTML, CSS, and JavaScript that features images, branching choices, and multiple distinct endings. 

## Team Members and Roles

### Mike Maggio

* JavaScript classes
* JSON integration
* Inventory system
* Keyboard input recognition
* User text input
* User text validation
  
### Javon Speller

* CSS
* Story & Dialogue Progession
* Dynamic Scene Visuals
* Conditional Story Branching
* Player Status Tracking
* Interactive Image Hover

## Application Overview

This is an interactive Dark Fantasy story about a curious hacker that dove a bit too deep into a system they didn't understand. Players will navigate mind bending peril as they search for a way out... or choose to continue their descent, sacrificing everything just to learn a little bit more.

## Flowchart

```mermaid
flowchart TD
    %%NODE FLOW%%
    START --> RUN?
    RUN? --> |YES| RUN_EXE
    RUN? --> |NO| DONT_RUN
	%% PATH 1
    RUN_EXE --> |eye| EYE
    EYE --> dialog_choice
	dialog_choice --> |Dialog choice 1| MARITIME_WANDERERS
    dialog_choice --> |Dialog choice 2| SWORD
    SWORD --> LEFT_OR_RIGHT
    LEFT_OR_RIGHT --> |left| riddle_incorrect
    LEFT_OR_RIGHT --> |right| BOOK
    BOOK --> |Inspect the book| WRITE
    WRITE --> |FAIL| BOOK_FAIL --> END
    WRITE --> |PASS| JOIN_PS?
    JOIN_PS? --> |JOIN| END
    JOIN_PS? --> |REFUSE| FIGHT
	%% PATH 2
    RUN_EXE --> |QM| QUESTION_MARK
    QUESTION_MARK --> riddle_choice
	riddle_choice --> |correct| riddle_correct
    riddle_choice --> |incorrect| riddle_incorrect --> END
    riddle_correct --> |Keep Going| CLOAK
    riddle_correct --> |Go back| GB --> END
    CLOAK --> |Move toward exit| EXIT --> RUN_EXE
    CLOAK --> |Keep Exploring| LAKE
    LAKE --> |Inspect the boat| MARITIME_WANDERERS
    MARITIME_WANDERERS --> |Does not have sword| SAIL --> RUN_EXE
    MARITIME_WANDERERS --> |has sword| FIGHT --> END
	%% PATH 3
    RUN_EXE --> |spiral| spiral
    spiral --> spiral_choice
    spiral_choice --> |keep running| KEEP_RUNNING --> RUN_EXE
    spiral_choice --> |inspect wall glitch| glitch
	%% PATH 4
    RUN_EXE --> |skull| skull
    skull --> skull_choice
    skull_choice --> |Turn around| turn
    skull_choice --> |smash mirror| smash
    
    %%NODE VALUES%%
    END[Game Over]
    spiral[trapped in endless hallway]
    skull[Mirror shows someone behind you]
	dialog_choice{Choose response}
    spiral_choice{Keep running or inspect wall glitch?}
    skull_choice{Turn around or smash mirror?}
    KEEP_RUNNING[Loop back to computer desk]
    glitch[Clip out of bounds: Admin Terminal unlocked]
    turn[Taken by the reflection]
    smash[glass shard added to inventory]
	riddle_choice{Answer riddle.}
    START[Create player character]
    RUN?{Player is facing blinking dialog box:
        'Are you sure you want to download demiurge.exe?'}
    RUN_EXE{Webcam turns on, showing room changing.
        Confused, player looks around, finds themselves in a new environment.
        It's a stone room with four walls, a glowing symbol on each wall.}
    DONT_RUN[Computer explodes.]
    EYE{Meet weird sailor wizard.
        Enchanted Sextant Added to Inventory. Dialog Choice}
    MARITIME_WANDERERS{Inducted into Fraternity of Maritime Wanderers.
        Shard added to inventory.}
    CLOAK{Cloak of Perseverance Added to Inventory. You see light.}
    JOIN_PS?{Offered membership in Peripatetic Society}
    SWORD[Sword added to inventory]
    riddle_correct{Rewarded opportunity to return to normal life. Go back?}
    GB[Wake up as if it was a dream.
        Inventory still in tact.]
    LAKE[Enter large room. Stone floor abruptly transitions to shore of a lake.
        Too large to see where it ends. There's a boat.]
    BOOK[Small room with a torch topped podium.
        Large leather tome lies on the podium.
		Shard added to inventory.]
    BOOK_FAIL['Perhaps we can learn more from your ashes.'
                Player is vaporized by white light from open book.]
    WRITE{A pen floats down. Walls begin to close in.
            Message appears on walls: 'You have 10 seconds to add
            to the realm's' knowledge.}
    QUESTION_MARK[Meet the Gnosticator.]
    riddle_incorrect[Consumed by Gnosticator.]
    FIGHT[Scenario depends on path up to this point]
        %%The Fraternity of Maritime Wanderers is a peaceful order.
        %%You have broken the rules.
        %%If refused PS: You know too much to live.
    BOOK[Congratulations, you found the scroll* of eternal knowledge]
    EXIT[Loop back to starting chamber]
    LEFT_OR_RIGHT{Left or right?}
```
