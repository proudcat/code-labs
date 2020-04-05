//
//  Card.swift
//  concentration
//
//  Created by koala on 2019/11/7.
//  Copyright © 2019 goooku. All rights reserved.
//

import Foundation
struct Card: Hashable,Equatable
{
    
    func hash(into hasher: inout Hasher) {
        identifier.hash(into: &hasher)
    }
    
    static func ==(lhs:Card,rhs:Card) -> Bool{
        return lhs.identifier == rhs.identifier
    }
    
    var isFaceUp = false
    var isMatched = false
    private var identifier: Int
    
    private static var identifierFactory = 0
    
    private static func getUniqueIdentifier() -> Int{
        identifierFactory += 1
        return identifierFactory
    }
    
    init(){
        self.identifier = Card.getUniqueIdentifier()
    }
}
