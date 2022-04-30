import { BaseClass } from "../../../../../builds/class/base";
import { WOTBClanResolve } from '../interfaces/clan/clan-resolve';
declare class WOTBClan extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    /**
     * @description Get a clan in World of Tanks Blitz.
     * @param {string | number} clanID ID of clan.
     * @returns {Promise<WOTBClanResolve | null>} Clan data.
     * @example
     * ...
     * const clan = await warcord.wargaming.blitz.clan.get('ID of Clan')
     */
    get(clanID: string | number): Promise<WOTBClanResolve | null>;
    /**
     * @description Get the ID's and Name of the putted name.
     * @param {string} clanNameOrTag ID or Tag of the clan.
     * @returns {Promise<any | null>} The clan ID's and Name.
     * @example
     * ...
     * const searchingClan = await warcord.wargaming.blitz.clan.search('Name or Tag of Clan')
     * //this returns an array of the clans found
     *
     * const clan = await warcord.wargaming.blitz.clan.get(searchingClan[0].clan_id)
     * //this returns the first clan data.
     */
    search(clanNameOrTag: string): Promise<any | null>;
}
export { WOTBClan };
