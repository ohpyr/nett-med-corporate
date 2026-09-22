package ca.nettmed.corporate.utils.finance

import java.math.BigDecimal
import java.math.RoundingMode

class MoneyMathUtils
{

    fun towDecimalRound(decimal: BigDecimal): BigDecimal
    {
        return decimal.setScale(2, RoundingMode.HALF_EVEN)
    }



}