//
//  Concentration.swift
//  concentration
//
//  Created by koala on 2019/11/7.
//  Copyright © 2019 goooku. All rights reserved.
//

import Foundation

struct Concentration
{
    private(set) var cards = [Card]()
    
    private var indexOfOneAndOnlyFaceUpCard : Int? {
        get{
            var foundIndex: Int?
            for index in cards.indices{
                if cards[index].isFaceUp{
                    if foundIndex == nil{
                        foundIndex = index
                    }else{
                        foundIndex = nil
                    }
                }
            }
            return foundIndex
        }
        set {
            for index in cards.indices{
                cards[index].isFaceUp = (index == newValue)
            }
        }
    }
    
    init(numberOfPairsOfCards: Int) {
        assert(numberOfPairsOfCards > 0,"Concentration.init(numberOfPairsOfCards:\(numberOfPairsOfCards)):numberOfPairsOfCards should bigger than zero")
        
        for _ in 1...numberOfPairsOfCards{
            let card = Card()
            cards += [card,card]
        }
        
        shuffleCards()
        
    }
    
    
    mutating func shuffleCards(){
        for _ in cards.indices{
            cards.swapAt(cards.count.arc4random, cards.count.arc4random)
        }
    }
    
    mutating func chooseCard(at index:Int){
        assert(cards.indices.contains(index),"Concentration.chooseCard(at:\(index)):chosen index not in the card")
        if !cards[index].isMatched {
            if let matchIndex = indexOfOneAndOnlyFaceUpCard, matchIndex != index {
                if cards[matchIndex] == cards[index] {
                    cards[matchIndex].isMatched = true
                    cards[index].isMatched = true
                }
                cards[index].isFaceUp = true
                
            }else{
                indexOfOneAndOnlyFaceUpCard = index
            }
        }else{
            
        }
    }
    
}
