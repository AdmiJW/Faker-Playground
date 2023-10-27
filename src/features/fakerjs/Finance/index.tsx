'use client';

import { AccountName } from './AccountName';
import { AccountNumber } from './AccountNumber';
import { Amount } from './Amount';
import { BIC } from './BIC';
import { BitcoinAddress } from './BitcoinAddress';
import { CreditCardCVV } from './CreditCardCVV';
import { CreditCardIssuer } from './CreditCardIssuer';
import { CreditCardNumber } from './CreditCardNumber';
import { Currency } from './Currency';
import { CurrencyCode } from './CurrencyCode';
import { CurrencyName } from './CurrencyName';
import { CurrencySymbol } from './CurrencySymbol';
import { EtheriumAddress } from './EtheriumAddress';
import { IBAN } from './IBAN';
import { LitecoinAddress } from './LitecoinAddress';
import { MaskedNumber } from './MaskedNumber';
import { PIN } from './PIN';
import { RoutingNumber } from './RoutingNumber';
import { TransactionDescription } from './TransactionDescription';
import { TransactionType } from './TransactionType';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function FinancePage() {
    const t = useDict().finance;

    return (
        <>
            <PageTitle title={t.title} />

            <AccountName />
            <AccountNumber />
            <Amount />
            <BIC />
            <BitcoinAddress />
            <CreditCardCVV />
            <CreditCardIssuer />
            <CreditCardNumber />
            <Currency />
            <CurrencyCode />
            <CurrencyName />
            <CurrencySymbol />
            <EtheriumAddress />
            <IBAN />
            <LitecoinAddress />
            <MaskedNumber />
            <PIN />
            <RoutingNumber />
            <TransactionDescription />
            <TransactionType />
        </>
    );
}
