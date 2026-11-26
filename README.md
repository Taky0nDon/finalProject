# Between the Interpolated
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

### Player Character Stats

    * Name: Player chosen name.
    * Gender: Player chosen gender.
    * History: Keeps a detailed record of all rooms visited and choices made my player.
    * Inventory: Keeps track of the player's items.
    * Number of Shards Collected: Keeps track of the number of shards in the player's inventory.
    * Paths Explored: Keeps track of which paths the player has been down.
    * Crackedness: As the player delves deeper into the dungeon, they will become more adept at surviving the systems working against them.


## Flowchart

```mermaid
flowchart TD
    %%NODE FLOW%%
    START --> RUN?
    RUN? --> |YES| RUN_EXE
    RUN? --> |NO| DONT_RUN --> END

	%% EYE PATH
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

	%% QUESTION MARK PATH
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

	%% SPIRAL PATH
    RUN_EXE --> |spiral| spiral
    spiral --> spiral_choice
    spiral_choice --> |keep running| KEEP_RUNNING --> RUN_EXE
    spiral_choice --> |inspect wall glitch| glitch
    glitch --> term_choice
    term_choice -->|execute override| term_rewrite
    term_choice -->|read system logs| term_logs --> END
	term_rewrite --> portal_choice
	portal_choice -->|step through portal| portal_escape --> END
	portal_choice -->|delete demiurge.exe| system_crash --> RUN_EXE

	%% SKULL PATH
    RUN_EXE --> |skull| skull
    skull --> skull_choice
    skull_choice --> |Turn around| turn --> RUN_EXE
    skull_choice --> |smash mirror| smash
    smash --> shard_choice
    shard_choice -->|attack reflection| shard_slash
    shard_choice -->|cut palm to wake up| shard_wake --> RUN_EXE
	shard_slash --> void_choice
	void_choice -->|enter the void| void_ascend --> END
	void_choice -->|peer into the void| void_peek --> RUN_EXE
    
    %%NODE VALUES%%
	%% EYE
    EYE{Meet weird sailor wizard. Enchanted Sextant Added to Inventory. Dialog Choice}
	dialog_choice{Choose response}
    MARITIME_WANDERERS{Inducted into Fraternity of Maritime Wanderers. Shard added to inventory.}
    SWORD[Sword added to inventory]
    LEFT_OR_RIGHT{Left or right?}
    BOOK[Small room with a torch topped podium. Large leather tome lies on the podium. Shard added to inventory.]
    WRITE{A pen floats down. Walls begin to close in. Message appears on walls: 'You have 10 seconds to add to the realm's' knowledge.}
    BOOK_FAIL['Perhaps we can learn more from your ashes.' Player is vaporized by white light from open book.]
    JOIN_PS?{Offered membership in Peripatetic Society}

	%% QUESTION MARK
    QUESTION_MARK[Meet the Gnosticator.]
	riddle_choice{Answer riddle.}
    riddle_correct{Rewarded opportunity to return to normal life. Go back?}
	riddle_incorrect[Consumed by Gnosticator.]	
    CLOAK{Cloak of Perseverance Added to Inventory. You see light.}
    GB[Wake up as if it was a dream. Inventory still in tact.]
    EXIT[Loop back to starting chamber]
    LAKE[Enter large room. Stone floor abruptly transitions to shore of a lake. Too large to see where it ends. There's a boat.]

	%% SPIRAL
	void_peek[You see yourself sitting at your desk. Something pulls you back.]
    spiral[trapped in endless hallway]
    spiral_choice{Keep running or inspect wall glitch?}
    KEEP_RUNNING[Loop back to computer desk]
    glitch[Clip out of bounds: Admin Terminal unlocked]
    term_choice{Enter root command or read logs?}
    term_rewrite[Reality code altered. Escape portal opens.]
    term_logs[Error: You were never the player. System wipe.]
	portal_choice{Step through the portal or delete demiurge.exe?}
	system_crash[Critical Error: Reality collapses. Rebooting simulation...]

	%% SKULL
    skull[Mirror shows someone behind you]
    skull_choice{Turn around or smash mirror?}
	void_ascend[You merge with the code. You are the new Demiurge.]
	void_choice{Enter the void or peer inside?}
	portal_escape[You step back into your bedroom. The monitor is off. You survived.]
    shard_choice{Use glass shard on reflection or self?}
    shard_slash[Reflection shatters. Doorway to void revealed.]
    shard_wake[Pain jolts you awake at your desk. Shard remains.]
    turn[Taken by the reflection]
    smash[glass shard added to inventory]

	%% MISC
    START[Create player character]
    RUN?{Player is facing blinking dialog box: 'Are you sure you want to download demiurge.exe?'}
    RUN_EXE{Webcam turns on, showing room changing. Confused, player looks around, finds themselves in a new environment. It's a stone room with four walls, a glowing symbol on each wall.}
    DONT_RUN[Computer explodes.]
    
    FIGHT[Scenario depends on path up to this point]
        %%The Fraternity of Maritime Wanderers is a peaceful order.
        %%You have broken the rules.
        %%If refused PS: You know too much to live.
    END[Game Over]
```
