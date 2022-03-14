export const add = (a: number, b: number): number => a + b;

export const getNextQuality = (sellIn: number, quality: number, type: string): number => {
  if (quality < 0) return 0
  if (quality > 50) return 50
  // 常规商品
  if (type == 'merchandise') {
    if (quality > 0 && sellIn > 0) {
      return quality - 1
    } else if (sellIn < 0 && quality > 0){
      return quality - 2
    }
  } else

  // 门票
  if (type == 'Backstage pass') {
    if (sellIn < 0) return 0
    else if (sellIn > 10 && quality < 48) {
      return quality + 2
    } else if (sellIn > 5 && quality < 47) {
      return quality + 3
    }
  } else 

  // 干酪
  if (type == 'Aged Brie' && sellIn < 0 && quality < 49) {
    return quality + 1
  }

  // 萨弗拉斯
  if (type == 'Sulfuras') {
    return quality
  }
}
