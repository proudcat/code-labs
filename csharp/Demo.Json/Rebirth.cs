using System;
using System.Collections;
using System.Collections.Generic;


public class TEST {
    public TEST()
    {
        Console.WriteLine("*****************");
    }
    public int abc;
}

/// <summary>
/// 重生数据结构
/// </summary>
public class Rebirth
{
    public Rebirth()
    {
        Console.WriteLine("*****************");
    }

    public Rebirth(int a)
    {
        Console.WriteLine("//////////////////////");
    }

    public int _id { get; set; }

    /// <summary>
    /// 钱消耗
    /// </summary>
    public int[] moneyCost { get; set; }

    /// <summary>
    /// 声望消耗
    /// </summary>
    // public int[] popularityCost { get; set; }

    /// <summary>
    /// 物品消耗1
    /// </summary>
    public STURebirthInfoCost[] itemCost1 { get; set; }

    /// <summary>
    /// 物品消耗2
    /// </summary>
    //  public STURebirthInfoCost[] itemCost2 { get; set; }

    /// <summary>
    /// 物品消耗3
    /// </summary>
    // public STURebirthInfoCost[] itemCost3 { get; set; }

    /// <summary>
    /// 物品消耗4
    /// </summary>
    // public STURebirthInfoCost[] itemCost4 { get; set; }

    /// <summary>
    /// 物品消耗5
    /// </summary>
    // public STURebirthInfoCost[] itemCost5 { get; set; }
}

public class STURebirthInfoCost
{
    public STURebirthInfoCost()
    {
        Console.WriteLine("a hahahahahahahaha");
    }

    /// <summary>
    /// 消耗类型
    /// 1 物品
    /// 2 英雄
    /// </summary>
    public int costType { get; set; }

    /// <summary>
    /// 物品或者英雄TypeID
    /// </summary>
    public int costId { get; set; }

    /// <summary>
    /// 消耗数量
    /// </summary>
    public int costNum { get; set; }

    /// <summary>
    /// 
    /// </summary>
    public int heroRebirth { get; set; }
}