// Imports
import { useState } from "react";
import { useRouter } from "next/router";
import Collapse from "@/components/collapse";
import CollapseText from "@/components/collapseText";

// JSON
import overview from "../public/JSON/overview.json";
import { MiddlewareNotFoundError } from "next/dist/shared/lib/utils";
import pledge from "../public/JSON/pledge.json";
import impact from "../public/JSON/impact.json";

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState(overview[0]);
  const [main, setMain] = useState("");

  function reset() {
    setMain("");
    setSelected(overview[0]);
  }

  return (
    <div className="home">
      <div>
        {/* <div className="home_menu">
          <button className={main === "overview" ? "clicked" : ""}>
            {main === "overview" ? (
              <span
                onClick={() =>
                  main === "overview" ? reset() : setMain("overview")
                }
              >
                ⎖
              </span>
            ) : (
              <></>
            )}
            &nbsp;
            <span
              onClick={() =>
                main === "overview" ? reset() : setMain("overview")
              }
            >
              {overview[0].title}
            </span>
          </button>
          {overview.slice(1).map((overview) => {
            return main === "overview" ? (
              <button
                key={overview.title}
                onClick={() => setSelected(overview)}
                className={
                  selected.title === overview.title
                    ? "clicked smaller"
                    : "smaller"
                }
              >
                {overview.title}
              </button>
            ) : (
              <></>
            );
          })}
          {main === "overview" ? (
            <></>
          ) : (
            <button
              className={main === "impact" ? "clicked" : ""}
              onClick={() => setMain("impact")}
            >
              Impact
            </button>
          )}
          {main === "overview" ? (
            <></>
          ) : (
            <button
              className={main === "pledge" ? "clicked" : ""}
              onClick={() => setMain("pledge")}
            >
              Pledge
            </button>
          )}
        </div> */}
        <div className="overview">
          <h2>OVERVIEW</h2>
          <p>
            <span className="">PRINT AGAINST APARTHEID</span> is a collective
            boycott of all HP-branded goods and services in solidarity with
            Palestinian liberation. <br></br> <br></br>In November 2015{" "}
            <span className="green">The Hewlett-Packard Company (HP)</span>{" "}
            split into two companies, HP Inc. for consumer hardware such as PCs
            and printers, and Hewlett Packard Enterprise (HPE) for enterprise
            products and services (business and government services). Both
            HP-branded corporations have played key roles in Israeli apartheid,
            providing services to the Israeli army and police, making them
            complicit in settler colonialism and the racial segregation of
            Palestinians.
          </p>
          <ul className="overview_menu">
            {overview.map((subject) => {
              return (
                <Collapse
                  key={subject.title}
                  title={subject.title}
                  content={subject.text}
                />

                // <li key={subject.title}>
                //   <span>▻ </span>
                //   {subject.title}
                // </li>
              );
            })}
          </ul>
          <p>
            HPE and HP Inc. are two of the most widely used technology companies
            across the globe and whilst their products serve as day-to-day
            conveniences for many consumers, their technologies form the
            backbone of Israeli apartheid, actively contributing to the ongoing
            brutalisation and murder of the Palestinian people.
          </p>
        </div>
        <div className="overview">
          <p>
            <span className="green">
              We are calling for a total boycott of all HP branded goods and
              services as a result of their involvement in this ethnic cleansing
              campaign. We will not give money to HPE or HP Inc. until they have
              withdrawn their support for the state of Israel.
            </span>
          </p>
        </div>
        <div className="overview">
          <h2>IMPACT</h2>
          <p>
            HP branded products and services are deeply intertwined with the
            Israeli police force and prison systems, their technologies forming
            the framework of Israel’s campaign of segregation, and facilitating
            Israel’s ethnic cleansing of Palestinians.
          </p>
          <ul className="impact_list">
            <CollapseText
              content={
                <li>
                  Since 7 October 2023 the number of Palestinians imprisoned in
                  Israeli custody has doubled from approximately 5,200 to{" "}
                  <span className="underline">over 10,000.</span>
                </li>
              }
            />
            <CollapseText
              content={
                <li>
                  {" "}
                  Palestinians in the West Bank are often processed in{" "}
                  <span className="underline">military courts</span> located
                  inside Israeli military bases, which exist with the function
                  of prosecuting “security violations” and actions regarded as a
                  threat to public order. Hundreds of thousands of Palestinians
                  have been brought before these courts on various charges,
                  including entering Israel without a permit, stone-throwing,
                  and traffic violations, the latter of which constitute upon
                  average 40% of charges per year. Despite military courts being
                  authorised to try anyone who commits an offence in the West
                  Bank, it was decided in the early 1980s that Israeli citizens
                  would be tried in the Israeli civilian court system, meaning
                  Israeli defendants are tried and sentenced under Israeli laws,
                  and Palestinian defendants are tried in military courts, whose
                  laws are different from the civilian court system. {}
                  <span className="green">
                    Citizens are tried in different courts under different laws
                    for the same offences, perpetuating a two-tiered citizenship
                    .
                  </span>
                </li>
              }
            />
            <CollapseText
              content={
                <li>
                  It is estimated that there are an{" "}
                  <span className="underline">
                    average of 500-700 Palestinian children
                  </span>{" "}
                  held in Israeli military detention each year, with an
                  estimated 13,000 mostly arbitrarily detained, interrogated,
                  tried in military courts and imprisoned since 2000.{" "}
                  <span className="underline">
                    A 2020 Save the Children report
                  </span>{" "}
                  that consulted 228 former child detainees from across the West
                  Bank, detained from between one and 18 months, has revealed
                  that 86% of Palestinian children detained in Israeli military
                  detention are beaten, 69% percent are strip-searched and 42%
                  are injured at the point of arrest, including sustaining
                  gunshot wounds and broken bones. This same research also found
                  some children have reported{" "}
                  <span className="green">violence of a sexual nature </span>and
                  some have reported being transported between detention centres
                  and court in <span className="green">small cages </span>.
                  Palestinian children are frequently interrogated at unknown
                  locations without the presence of a caregiver, and are often
                  deprived of food, water and sleep, or access to legal counsel,
                  according to the research. The main alleged crime for these
                  detentions is stone throwing, which can carry a 20-year
                  sentence in prison for Palestinian children. This physical and
                  emotional abuse often results in
                  <span className="green">
                    {" "}
                    lifelong psychological trauma and life-altering physical
                    disabilities.
                  </span>
                </li>
              }
            />
            <CollapseText
              content={
                <li>
                  {" "}
                  As of the end of October 2023 there was a record high of{" "}
                  <span className="underline">
                    2,070 administrative detainees
                  </span>
                  ,{" "}
                  <span className="green">
                    Palestinians held without trial or charge.{" "}
                  </span>
                  Administrative detention is used as a pre-emptive tool against
                  what the state perceives as a potential threat of terrorism or
                  rebellion; in other words, no offence has been committed. As
                  this measure is intended to be preventative, it has no time
                  limit, and the classified nature of the alleged intelligence
                  upon which the detention is imposed means that it is not
                  revealed to detainees why they are being held.{" "}
                  <span className="green">
                    This leaves people who are not charged, tried or convicted,
                    facing unknown allegations with no way to disprove them, not
                    knowing when they will be released.
                  </span>
                </li>
              }
            />
            <CollapseText
              content={
                <li>
                  The UN Human Rights Office{" "}
                  <span className="underline">
                    reports receiving first hand testimonies
                  </span>{" "}
                  depicting abuse and humiliation of Palestinians, including
                  “worrying allegations that Palestinian inmates have been{" "}
                  <span className="green">
                    subjected to beatings and abuse by detention guards
                  </span>
                  , with reports of male and female{" "}
                  <span className="green">detainees threatened with rape</span>
                  ”. The December 2023 report also expresses concern that “the
                  conditions of Palestinian prisoners in Israeli jails have
                  reportedly deteriorated significantly. Detainees report{" "}
                  <span className="green">
                    severe overcrowding and severely restricted access to basic
                    rights
                  </span>{" "}
                  such as food, water and electricity, medical treatment, family
                  visits and legal aid”.
                </li>
              }
            />
            <CollapseText
              content={
                <li>
                  {" "}
                  Since 1967{" "}
                  <span className="underline">
                    over 1,800 military orders
                  </span>{" "}
                  have been issued, yet very few have been promptly translated
                  into Arabic, as is required under the Fourth Geneva
                  Convention. Despite this, these military orders control every
                  aspect of Palestinian life, including serving to criminalise
                  all forms of resistance to the Israeli occupation. Many of
                  these orders are written broadly to allow for wide
                  interpretation by the Israeli army, which violates the
                  obligation of states under international human rights law to
                  clearly spell out conduct that could result in criminal
                  sanction.<br></br>
                  <p className="underline">
                    Examples of Israeli Military Orders:{" "}
                  </p>
                  <p>
                    <span className="green"> Military Order No. 101</span>{" "}
                    criminalises non-violent political expression, such as
                    singing a hymn or sounding a slogan, and labels such
                    activities as “terrorism”.<br></br>
                    <span className="green">
                      {" "}
                      Military Orders 811 and 847
                    </span>{" "}
                    allow Israelis to use "powers of attorney" to purchase land
                    from unwilling Palestinian sellers.
                    <br></br>
                    <span className="green"> Military Order No. 537</span>{" "}
                    removes democratically elected Mayors of West Bank cities
                    from their position.<br></br>
                    <span className="green"> Military Order No. 854</span> was
                    established to control the admissions of academic
                    institutions in the West Bank. Under 854, the military has
                    complete control over who can enter colleges as students,
                    teachers, or administrators. All students must obtain
                    identification issued by the Area Commander prior to
                    registration.<br></br>
                    <span className="green"> Military Order No. 998</span>{" "}
                    Palestinians are required to obtain Israeli military
                    authorisation to withdraw from bank accounts. <br></br>
                    <span className="green">
                      {" "}
                      Military Order 93 and Amendment
                    </span>{" "}
                    grants all Palestinian insurance operations to the Israeli
                    Insurance Syndicate. <br></br>
                    <span className="green"> Military Order No. 128</span> gives
                    the Israeli military the right to take over Palestinian
                    businesses that are not open during normal business hours.
                    Whilst it is no longer illegal to display the Palestinian
                    flag, it is strongly and often violently repressed.
                  </p>{" "}
                </li>
              }
            />
            <CollapseText
              content={
                <li>
                  {" "}
                  One in every five Palestinians have been arrested and charged
                  under military orders, an incarceration rate that doubles to{" "}
                  <span className="underline">
                    two in every five Palestinian men having been arrested
                  </span>
                  . For comparison, just over{" "}
                  <span className="underline">one in two hundred</span> citizens
                  in the USA have been arrested.
                </li>
              }
            />{" "}
            <CollapseText
              content={
                <li>
                  The United Nations Special Rapporteur said the Occupied
                  Palestinian Territories had been “transformed as a whole into
                  a constantly surveilled open-air prison. The occupying power
                  framed the Palestinians as a collective incarcerable security
                  threat, ultimately de-civilianising them, namely eroding their
                  status as protected persons”. (
                  <a
                    href="https://www.ohchr.org/en/news/
                2023/07/special-rapporteur-says-israels-unlawful-carceral-practices-occupied-palestinian"
                    target="_blank"
                  >
                    Source
                  </a>
                  )
                </li>
              }
            />
            <CollapseText
              content={
                <li>
                  Israel’s control over the Palestinian population is based on a{" "}
                  <span className="underline">
                    system of colour-coded identification cards
                  </span>
                  , with Palestinians in the{" "}
                  <span className="underline">West Bank</span> and the Gaza
                  Strip issued with green ID cards and Palestinians in{" "}
                  <span className="underline">East Jerusalem</span> and Israel
                  given blue ID cards. It is illegal for Palestinians in the
                  occupied West Bank to travel to Gaza and Jerusalem and for
                  Palestinians in Gaza to travel to Jerusalem and the West Bank,
                  unless they are issued a special permit by the Israeli
                  military.{" "}
                  <span className="underline">
                    Israel has refused to add many people living in Gaza
                  </span>{" "}
                  to the population registry altogether, and despite the right
                  to return being enshrined in UN resolutions, there are nearly{" "}
                  <span className="underline">
                    six million Palestinian refugees
                  </span>{" "}
                  in the diaspora, most living in camps and communities in the
                  West Bank, Gaza, Lebanon, Syria and Jordan, who cannot return
                  to the territories under Israeli control. This control over
                  population demographics and freedom of movement within the
                  Occupied Palestinian Territories lies at the core of Israeli
                  occupation and has drawn comparisons to South African
                  apartheid, during which ID cards were used to control the
                  movement of Black citizens.
                </li>
              }
            />
          </ul>
        </div>

        <div className="overview">
          <h2>COMPLICITY</h2>
          <p>
            With the support of multinational corporations such as HP, Israel
            continues their campaign of ethnic cleansing, breaking international
            laws, land grabbing and dehumanising the people of Palestine. Until
            this support is stopped, Israel will not be held to account for its
            actions and the people of Palestine will continue to suffer
            unimaginably.<br></br>
            <br></br>
            Whilst there is a long, beautiful relationship between resistance
            movements and print, the art world is all too often complacent in
            the face of technology-enabled racism. Many artists and galleries
            perform gestures of solidarity and pay lip service to liberatory
            movements without taking any meaningful material action to address
            their own participation in systems of violence. We must acknowledge
            that by continuing to produce our creative projects on HP products
            and services we are not only artwashing HP’s reputation but
            providing funding and tacit support for its warmongering. By
            refusing to address the shortcomings of our communities and
            interrogate the tools and processes we utilise, we become complicit
            in the crimes we claim to oppose, no matter how well-intentioned our
            personal motives or the narratives within our work.<br></br>
            <br></br>
            The call to become an ethical consumer and creator is not
            unprecedented: schools, churches and companies worldwide have been
            withdrawing their financial support for HP and other corporations
            profiting from genocide. It is time for the art world to catch up.
          </p>
          {/* {main === "" ? (
            <div dangerouslySetInnerHTML={{ __html: selected.text }}></div>
          ) : main === "overview" ? (
            <div dangerouslySetInnerHTML={{ __html: selected.text }}></div>
          ) : main === "impact" ? (
            <div dangerouslySetInnerHTML={{ __html: impact[0].text }}></div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: pledge[0].text }}></div>
          )} */}
        </div>
      </div>
    </div>
  );
}
