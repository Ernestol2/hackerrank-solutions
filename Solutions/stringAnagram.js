function stringAnagram(dictionary, query) {
    
    function areAnagrams(word1, word2) {
        if (word1.length !== word2.length) return false;

        const sortedWord1 = word1.split('').sort().join('');
        const sortedWord2 = word2.split('').sort().join('');

        return sortedWord1 === sortedWord2;
    }

    return query.map(queryWord => {
        return dictionary.filter(dicWord => areAnagrams(queryWord, dicWord)).length;
    })
  
}

console.log(stringAnagram(
    ['hack', 'a', 'rank', 'khac', 'ackh', 'kran', 'rankhacker', 'a', 'ab', 'ba', 'stairs', 'raits'],
    ['a', 'nark', 'bs', 'hack', 'stairs']));