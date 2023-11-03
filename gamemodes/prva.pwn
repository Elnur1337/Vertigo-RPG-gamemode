#include <open.mp>
#include <samp-node>
#include <streamer>

/*
     ___      _
    / __| ___| |_ _  _ _ __
    \__ \/ -_)  _| || | '_ \
    |___/\___|\__|\_,_| .__/
                      |_|
*/

main()
{
	printf(" ");
	printf("  -------------------------------");
	printf("  |  My first open.mp gamemode! |");
	printf("  -------------------------------");
	printf(" ");
}

forward GetCharFromPlayerNameAt(playerid, index);
public GetCharFromPlayerNameAt(playerid, index)
{
	new name[24];
	GetPlayerName(playerid, name, 24);
	return name[index];

}