// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ICryptoDevs {
    /*
        The token id in this case can be thought of as a data structure resembling this stuct - {
            - tokenIDs : [{tokenID: 1}, {tokenID: 2}, {tokenID: 3}];
        }
    */
    /**
     * @dev Returns a token ID owned by `owner` at a given `index` of its token list.
     * Use along with {balanceOf} to enumerate all of ``owner``'s tokens.
     */
     /*
        See notes as to where these functions are defined. They are inherited and triggered by the mint function 
    */
    function tokenOfOwnerByIndex(address owner, uint256 index)

        external
        view
        returns (uint256 tokenId);

    /**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
     /*
        See notes as to where these functions are defined. They are inherited and triggered by the mint function 
    */
    function balanceOf(address owner) external view returns (uint256 balance)

}