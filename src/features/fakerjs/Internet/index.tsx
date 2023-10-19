import { PageTitle } from '@/core/components/FakerSection';

import { Avatar } from './Avatar';
import { Color } from './Color';
import { DisplayName } from './DisplayName';
import { DomainName } from './DomainName';
import { DomainSuffix } from './DomainSuffix';
import { DomainWord } from './DomainWord';
import { Email } from './Email';
import { Emoji } from './Emoji';
import { ExampleEmail } from './ExampleEmail';
import { HttpMethod } from './HttpMethod';
import { HttpStatusCode } from './HttpStatusCode';
import { IP } from './IP';
import { IPv4 } from './IPv4';
import { IPv6 } from './IPv6';
import { MAC } from './MAC';
import { Password } from './Password';
import { Port } from './Port';
import { Protocol } from './Protocol';
import { Url } from './Url';
import { UserAgent } from './UserAgent';
import { UserName } from './UserName';

export function InternetPage() {
    return (
        <>
            <PageTitle title='Internet 🌐' />

            <Avatar />
            <Color />
            <DisplayName />
            <DomainName />
            <DomainSuffix />
            <DomainWord />
            <Email />
            <Emoji />
            <ExampleEmail />
            <HttpMethod />
            <HttpStatusCode />
            <IP />
            <IPv4 />
            <IPv6 />
            <MAC />
            <Password />
            <Port />
            <Protocol />
            <Url />
            <UserAgent />
            <UserName />
        </>
    );
}
