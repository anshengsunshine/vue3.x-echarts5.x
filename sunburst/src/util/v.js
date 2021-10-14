export function sameDataArr22(dataArr) {
    // 把源数据先变成目标数据的规则
    var oldDataRule = []
    dataArr.forEach(el => {
        var oldObj = {
            name: el.type,
            types: [],
            itemStyle: el.itemStyle
        }
        var typeObj = {
            type: el.type,
        }
        oldObj.types.push(typeObj)
        oldDataRule.push(oldObj)
    })

    /**
     * 先去重，后合并
     * 1、源数据去重
     * 2、把去重后的数据和源数据中相同name的数据合并citys
    */
    var newtypeData = []
    var newObj = {}
    oldDataRule.forEach((el, i) => {
        if (!newObj[el.name]) {
            newtypeData.push(el);
            newObj[el.name] = true;
        } else {
            newtypeData.forEach(el => {
                if (el.name === oldDataRule[i].name) {
                    el.types = el.types.concat(oldDataRule[i].types);
                }
            })
        }
    })
    return newtypeData
}