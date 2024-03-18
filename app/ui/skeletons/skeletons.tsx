export const SettingsSkeleton = () => {
    return (
        <div className="flex flex-col">
            <span className="text-xl m-5 block text-white/0">Bot strategy</span>
            <div className="flex gap-5 mr-5">
                <div className="flex-initial">
                    <StrategyOptionsSkeleton />
                </div>
                {/* <div className="flex-1">
                    <StrategyTableSkeleton />
                </div> */}
            </div>
        </div>
    );
};

function ButtonSkeleton() {
    return (
        <div className="w-[200px] my-8  border border-gray-300/0 p-2 rounded-md dark:bg-white/10 bg-gray-800/10 animate-pulse text-white/0 text-center">
            Loading...
        </div>
    );
}

function InputSkeleton() {
    return (
        <>
            <span className="block text-gray-400/0 text-[12px] overflow-hidden">
                Loading...
            </span>
            <div className="relative w-auto h-max">
                <input
                    type="text"
                    disabled
                    className="z-10 w-full rounded-lg border bg-gray-800/10 placeholder:text-end p-2 border-gray-300/0 dark:bg-white/10 animate-pulse text-white/0"
                />
                <input
                    type="range"
                    disabled
                    className="w-full bg-gray-800/10 cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none border-gray-300/0 dark:bg-white/10 animate-pulse text-white/0 rounded-xl"
                />
                <span className="z-0 absolute overflow-hidden right-2 top-3  text-gray-800/0 text-sm">
                    Loading...
                </span>
            </div>
        </>
    );
}

export function StrategyOptionsSkeleton() {
    const inputsWrapperCln = 'w-full ';
    return (
        <div>
            <div className="h-max dark:bg-secondary-color rounded-lg shadow-main m-1 flex flex-col items-center">
                <div className="flex flex-col gap-5 p-5">
                    <div className=" flex flex-col gap-5">
                        <span className="w-max text-md  bg-gray-800/10 dark:bg-white/10 animate-pulse text-white/0">
                            Strategy:
                        </span>
                        <div className="flex gap-5">
                            <div className={inputsWrapperCln}>
                                <InputSkeleton />
                            </div>
                            <div className={inputsWrapperCln}>
                                <InputSkeleton />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className=" w-max text-md bg-gray-800/10 dark:bg-white/10 animate-pulse text-white/0">
                            Insurance orders:
                        </span>
                        <div className="grid grid-cols-2-custom relative gap-5">
                            <div className={inputsWrapperCln}>
                                <InputSkeleton />
                            </div>
                            <div className={inputsWrapperCln}>
                                <InputSkeleton />
                            </div>
                            <div className={inputsWrapperCln}>
                                <InputSkeleton />
                            </div>
                            <div className={inputsWrapperCln}>
                                <InputSkeleton />
                            </div>
                            <div className={inputsWrapperCln}>
                                <InputSkeleton />
                            </div>
                        </div>
                    </div>
                </div>

                <ButtonSkeleton />
            </div>
        </div>
    );
}

function StrategyTableSkeleton() {
    const headerColsStyle =
        'text-center  dark:border-gray-700 border-gray-300 p-0';

    const colsStyle = 'text-center  dark:border-gray-700 border-gray-300';

    // const tableRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
    //     <tr
    //         key={key}
    //         className="dark:hover:bg-white/5 hover:bg-secondary-color/5"
    //     >
    //         <td className={`${colsStyle}`}>0</td>
    //         <td className={`${colsStyle}`}>0</td>
    //         <td className={`${colsStyle}`}>0</td>
    //         <td className={`${colsStyle}`}>0</td>
    //         <td className={`${colsStyle}`}>0</td>
    //         <td className={`${colsStyle}`}>0</td>
    //         <td className={`${colsStyle}`}>0</td>
    //         <td className={`${colsStyle}`}>0</td>
    //         <td className={`${colsStyle}`}>0</td>
    //         <td className={`${colsStyle} `}>0</td>
    //     </tr>
    // ));

    return (
        <div className="h-full w-full  dark:bg-secondary-color rounded-lg shadow-main my-1 flex flex-col items-center text-[12px] overflow-auto">
            <div className="h-full w-full ">
                <div className="h-[100px] w-full rounded-lg  ">
                    <div className="text-white/20 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem qui ipsam mollitia nulla incidunt architecto
                        quae voluptates accusamus, perspiciatis est ut eligendi
                        tenetur soluta voluptatum excepturi sint ex quia
                        voluptatibus temporibus iure? Veniam, repellendus eum.
                        Voluptatum sapiente itaque adipisci hic temporibus odio
                        officiis, laborum possimus magni excepturi in est magnam
                        debitis sint dolore corrupti placeat veritatis obcaecati
                        odit modi illum minima. Rem fugit saepe voluptas vel,
                        illum voluptatem non repudiandae modi necessitatibus
                        repellendus, enim dolores, qui similique. Sequi maiores,
                        repudiandae totam neque explicabo perspiciatis animi!
                        Impedit vel numquam laboriosam necessitatibus! Tenetur
                        dolore blanditiis sunt quaerat sed, aperiam optio
                        obcaecati tempore ad enim deserunt, aliquam possimus
                        dolor minus vitae animi eveniet eos asperiores
                        repudiandae necessitatibus dolorum, laudantium adipisci
                        alias similique! Possimus veniam aspernatur saepe dicta,
                        dolorum velit, ex, unde aut consectetur tempore pariatur
                        mollitia deserunt et impedit dolore repudiandae.
                        Reprehenderit voluptatibus tempora quos autem, totam
                        veniam, recusandae ea quo consectetur ipsam architecto
                        itaque ex. Dolorem reprehenderit esse at officia! Ex,
                        itaque molestias excepturi iste, labore quos distinctio
                        officiis illum consequuntur, eius recusandae harum? Aut
                        laudantium exercitationem, ratione a reiciendis,
                        voluptatibus labore quod nisi quisquam cum nulla
                        provident magni commodi. Modi asperiores nihil vel in
                        voluptatum quidem aspernatur eius doloremque molestias
                        tempore facilis illum hic, magni officia doloribus ut
                        reprehenderit! Voluptas voluptates, molestias veniam
                        distinctio, explicabo, repellat voluptate quidem est
                        quibusdam tenetur totam amet. Omnis reprehenderit
                        aliquam veniam voluptates, perferendis provident tempore
                        sed ratione laborum illo incidunt aperiam ea suscipit
                        facere earum molestias pariatur nobis dicta? Totam
                        veniam labore, ad quaerat tempore sit officiis facilis
                        vitae soluta cupiditate, nihil possimus ducimus corrupti
                        temporibus natus dolores, dolorum illum qui maiores
                        distinctio! Nisi, dolore quia molestiae accusantium
                        error nihil eveniet! Ad delectus ullam sequi!
                        Laboriosam, corporis ex. Ut, vitae libero error
                        temporibus aliquid placeat nesciunt dignissimos enim
                        numquam magni maiores fuga eum praesentium dolore
                        deleniti ipsum quam illum neque odit. At nesciunt nulla,
                        quo omnis debitis quisquam? Vel, quo? Vel quidem dolorem
                        autem, modi alias deleniti quam quibusdam tempora sint,
                        totam, numquam ratione expedita distinctio itaque
                        voluptates quae! Impedit, placeat. Voluptas deserunt eum
                        illo, laborum tempore minus, assumenda culpa accusamus
                        in dignissimos nemo unde mollitia distinctio doloremque
                        magnam, tempora aliquam amet quaerat doloribus. Delectus
                        veritatis architecto, animi exercitationem impedit ullam
                        temporibus consequuntur placeat illum ad eligendi. Odio
                        officiis, iusto alias veniam ducimus cum, beatae libero
                        provident perferendis enim sapiente aliquid. Esse,
                        repudiandae numquam! Tempora necessitatibus molestias
                        dolore fugiat vitae vel aut deleniti non optio odio
                        accusamus asperiores, sed laudantium, quae doloremque
                        qui doloribus. Repellat labore repellendus adipisci
                        omnis esse, reiciendis, non cum iusto officiis illum
                        atque sint praesentium hic minima velit laboriosam
                        consequuntur iste dignissimos dolor fugiat nobis
                        tempora. Incidunt amet earum vel itaque facere. Dolore
                        facere similique enim non iste saepe accusantium a
                        placeat asperiores sint rerum, tenetur deleniti? Quam
                        autem cum dolorum est tempora provident saepe quos
                        necessitatibus, maxime deserunt, iusto, vel voluptas.
                        Sequi doloribus facere harum aspernatur magni, atque
                        impedit consectetur, quam quod aliquam repellendus,
                        perspiciatis dignissimos? Quas rem dolore perspiciatis
                        vitae, mollitia recusandae doloribus ducimus perferendis
                        labore natus delectus suscipit dicta rerum, ratione a
                        aliquid minus excepturi? Consectetur eaque nostrum
                        fugiat, nemo possimus expedita aperiam! Reiciendis,
                        quibusdam asperiores hic adipisci sed dolore beatae
                        eligendi, ad qui eius, excepturi nihil at porro? Sint
                        eveniet debitis aliquam temporibus repellendus, delectus
                        nesciunt qui, rerum asperiores sed laudantium
                        perspiciatis. Iste, fuga nemo. Excepturi dolore
                        accusantium ipsum aspernatur molestias veniam officiis.
                        Esse id, repellat fuga eos enim necessitatibus
                        laboriosam mollitia ipsa maiores explicabo est cumque
                        maxime facere eius beatae, sint ullam, corporis dolor
                        provident doloremque adipisci vel quasi omnis? Obcaecati
                        voluptatem assumenda cum quos sed aliquam dolores iste
                        eveniet, quasi, debitis facere doloremque sunt maxime!
                        Explicabo officia esse commodi, voluptatibus temporibus
                        blanditiis, inventore est magni ad sint culpa numquam
                        facere tempore. Quis sint quaerat explicabo nesciunt hic
                        aut qui porro odit deleniti at numquam atque sed
                        voluptas aperiam iure molestiae, consequatur mollitia
                        possimus ex blanditiis veniam quos. Quia dolorum quod
                        sunt, odio temporibus error rerum, ratione saepe fugit
                        earum assumenda ipsam! Et ad enim autem aliquam
                        similique. Ad ex facilis reprehenderit sunt eius, animi
                        vitae explicabo, perspiciatis doloribus hic tenetur
                        aliquid similique quos, nam praesentium laboriosam
                        exercitationem debitis quod quaerat vel velit
                        asperiores. Blanditiis, tempore est debitis, aliquam ea,
                        iure impedit voluptas ab facere possimus incidunt quas?
                        Ipsam, provident reiciendis aut non ratione, saepe
                        nesciunt impedit iste et, nostrum facilis similique!
                        Repellendus sed molestias at suscipit dolorem, nostrum
                        consectetur itaque ipsam facere reiciendis in distinctio
                        numquam placeat. Tempora ipsum itaque, ullam harum eaque
                        distinctio molestiae deserunt ratione totam dolor velit
                        explicabo, officiis nihil ipsam quas impedit non amet
                        dolorem reiciendis. Voluptatum repellendus cupiditate
                        omnis ad non atque aspernatur minus odit quae ipsum
                        nulla voluptatem architecto reiciendis eius perferendis
                        velit a, est assumenda quidem possimus ipsa rerum
                        commodi quaerat laborum. Libero aperiam cumque eaque
                        maiores quidem quas fugit, dolores porro. Ab eius nulla
                        expedita quos. Temporibus veniam doloribus debitis
                        minima ducimus, neque autem ratione ipsam tenetur
                        molestias repellat pariatur blanditiis esse dolores
                        possimus corrupti, unde repudiandae asperiores quo aut
                        quod magni minus ea? Non porro praesentium sapiente vel
                        ipsa repellendus laborum earum numquam autem accusantium
                        iste ut, quam magnam in hic, reiciendis expedita facilis
                        assumenda? Vitae facere alias, eum eligendi distinctio
                        molestiae doloremque iste neque voluptatibus eius sit
                        harum optio tenetur ex voluptate expedita nobis odit!
                        Unde, doloribus autem? Nostrum velit ex voluptates et
                        error cupiditate nulla dicta minus deserunt. Modi
                        quibusdam non vero facere? Minima rerum, atque neque
                        magni quibusdam porro excepturi beatae exercitationem
                        sapiente tenetur tempore amet magnam veniam non
                        perferendis quidem nam modi repellendus velit at esse,
                        iusto corporis. Quam sit cumque laborum aspernatur.
                        Neque nostrum dolorem sint, aliquid, nisi, earum
                        similique soluta adipisci eos sapiente magni. In libero
                        possimus beatae optio, quas, dolorem assumenda quos,
                        eaque eum perferendis reprehenderit repudiandae? Illo,
                        deserunt aliquid ullam voluptatibus ea mollitia eveniet,
                        quisquam quibusdam molestiae consectetur doloremque a
                        nemo fugiat provident velit delectus dolor ipsam hic ut
                        sunt voluptas temporibus culpa maxime ipsa!
                        Exercitationem architecto ducimus mollitia saepe nihil,
                        labore expedita beatae quos fugiat amet temporibus rem
                        nobis recusandae praesentium pariatur, inventore,
                        laboriosam sapiente doloribus optio corrupti? Optio
                        porro aspernatur, deleniti officia laudantium veniam
                        autem? Velit error autem deleniti blanditiis ea aliquam
                        itaque mollitia, ducimus ipsum ipsa ipsam enim veniam ut
                        porro eum voluptatem, accusamus totam id nesciunt
                        veritatis est. Debitis reiciendis, voluptatem minus
                        nesciunt cumque quisquam ratione dolorem fugiat culpa
                        dolor, minima, ex non voluptas quia praesentium quae
                        animi voluptatum aliquid dolorum excepturi unde
                        molestias eaque veritatis? Dicta eaque consectetur eius
                        inventore ea minima quaerat, cum fuga doloribus
                        distinctio nihil iusto corrupti quis! Facere, voluptatem
                        excepturi? Illum quaerat ut consequuntur animi
                        cupiditate unde fugit in minima officia nemo iste
                        laboriosam harum nesciunt laudantium et, perspiciatis
                        voluptatibus. Facilis veritatis eligendi exercitationem
                        consectetur, deleniti praesentium, quidem aliquid libero
                        ipsa, esse dignissimos assumenda repudiandae? Natus
                        voluptatibus numquam repudiandae minus, quidem sequi
                        rerum, dolores corrupti veniam sunt minima atque
                        exercitationem voluptatum. Obcaecati dolore expedita non
                        eum, sequi numquam praesentium maxime placeat nemo
                        delectus sunt tempora optio a magnam magni quos corporis
                        dicta, veritatis reprehenderit asperiores suscipit odit
                        repudiandae eaque nisi. Harum modi dolorum autem libero
                        suscipit repellendus numquam doloribus dolores mollitia.
                        Harum labore cumque tenetur consequatur? Ab dolor
                        quaerat laboriosam voluptate rerum aliquid sunt aperiam
                        quod alias, atque officia voluptates voluptatem. Dolore,
                        ex. Earum placeat corrupti quia autem commodi in
                        doloribus deserunt molestias? Nesciunt iure enim labore
                        exercitationem alias illo cum optio non fugit, facilis
                        magni dolorem itaque totam! Quae eum et officiis optio
                        qui, ipsam odio quos dolore delectus sit suscipit quia
                        incidunt expedita ex temporibus similique eos molestiae
                        ducimus consequuntur ad? Earum deleniti molestias quam
                        maiores, natus odit fugiat et itaque at quas quos quidem
                        cum repellendus illum aut laboriosam dicta. Hic sit,
                        minus, vero tempora in eum at quos, repudiandae nisi sed
                        modi! Eum perspiciatis aspernatur sit repellat modi
                        eius, enim suscipit aut maxime explicabo? Recusandae
                        totam modi et animi! Autem, officia nesciunt consequatur
                        mollitia magnam ipsam rerum ea cupiditate sed libero
                        nulla harum excepturi? Impedit quidem officiis rem
                        expedita dolore nulla laboriosam distinctio quam dolor.
                        Illum assumenda nostrum eligendi consequatur natus
                        reiciendis molestias repudiandae tempora quam iusto
                        blanditiis officia culpa ea neque fugit veniam quidem
                        maxime illo aliquam distinctio alias, quibusdam totam.
                        Obcaecati, cum est? Ullam, ratione odit sed quae enim
                        optio! Voluptatem sit eveniet cupiditate adipisci
                        voluptate itaque rem excepturi, voluptatibus aspernatur
                        repellat at natus dolores et, atque nobis dignissimos
                        maxime id sequi molestiae? Cumque quibusdam cupiditate
                        obcaecati veniam, nisi, consequatur deserunt repellat
                        voluptatem blanditiis veritatis, nulla numquam? Itaque,
                        fugit? Quas rem quasi aperiam suscipit ratione corrupti
                        aliquam maxime, quo iste ad quaerat illo consectetur
                        animi, impedit odio quam, et velit dolore asperiores.
                        Voluptatum excepturi error repellat quisquam
                        necessitatibus facilis aspernatur laboriosam est natus
                        voluptatibus, quam dolore delectus? Sit, sunt. Eius
                        suscipit expedita quibusdam quo eum, atque blanditiis
                        sed sequi ullam nulla veritatis non at quidem aspernatur
                        recusandae. Totam doloremque laborum deserunt, esse, a
                        est assumenda voluptatibus aliquam commodi tempore
                        magnam quam illo distinctio culpa? Provident, nisi!
                        Rerum quam aspernatur ipsum voluptatibus vel? Explicabo
                        quisquam suscipit qui, natus atque cum architecto nemo,
                        provident sed enim soluta, eius molestiae voluptas
                        beatae quasi animi officiis rerum odit quas harum?
                        Laudantium impedit quia quibusdam voluptates, dolorem
                        mollitia sint culpa id repudiandae delectus voluptatibus
                        expedita. Non quod illum voluptatem quas sunt deleniti
                        nesciunt nisi atque facilis error, ut impedit esse
                        exercitationem dicta assumenda laboriosam autem sapiente
                        at reiciendis, fugit officia quia! Dolore, maxime totam
                        maiores recusandae cumque ex architecto, qui veniam
                        cupiditate velit assumenda fugiat, temporibus dolorem?
                        Doloribus nulla, enim voluptas quod blanditiis eos eaque
                        sunt cupiditate. Perferendis, aut possimus asperiores
                        libero, sunt, ipsam quis laboriosam officiis quod
                        doloribus distinctio voluptatem nisi unde? Sint animi
                        quos consequatur dolore laudantium iusto dolores esse
                        ipsam, debitis sit voluptatum ducimus, recusandae velit
                        ex nostrum nobis accusamus minus. A architecto sequi
                        repudiandae, ipsum voluptatum accusamus sapiente
                        corporis adipisci placeat magni, quidem voluptate vel
                        iusto ipsam natus consequatur. Quis vero itaque rem
                        vitae fuga nulla. Saepe consequatur ipsam sed aperiam
                        nam tempore, vel dolorum accusamus hic delectus ex
                        rerum. Nisi commodi repellendus tenetur distinctio
                        assumenda autem voluptatum iusto eos laudantium iure
                        fugit quidem impedit, ex eaque temporibus sunt at magni,
                        ratione blanditiis, dolor mollitia placeat! Placeat
                        dolore excepturi voluptatem doloremque et sequi iste.
                        Debitis molestiae accusantium nobis eveniet obcaecati
                        hic commodi quia voluptates, nostrum porro non ea,
                        laboriosam excepturi aspernatur asperiores, cupiditate
                        aut? Veniam porro labore voluptate sint ducimus deleniti
                        facere, ea quia rerum officiis facilis possimus soluta
                        illo aspernatur odit corrupti architecto iure pariatur
                        perferendis adipisci corporis dignissimos! Recusandae
                        sunt perspiciatis aut blanditiis fugiat nisi magnam
                        dolore deleniti, molestiae ipsa, cum enim commodi ut
                        consectetur sequi repellat! Ea provident aliquid
                        reprehenderit magni sit explicabo, quod quidem. Officiis
                        dolores veritatis impedit nobis alias voluptatibus,
                        voluptates eligendi ad ipsum animi error. Laborum odio
                        ducimus unde at impedit quas odit dolorum. Aliquam
                        impedit voluptas quos beatae labore repellat eveniet.
                        Tempore veritatis facilis laudantium sed sunt obcaecati
                        eius possimus omnis optio inventore quo, suscipit odit
                        voluptas perspiciatis voluptate blanditiis,
                        necessitatibus veniam odio! Obcaecati cupiditate itaque,
                        officiis commodi repudiandae exercitationem? Maxime,
                        praesentium quod tempora corporis commodi, iusto vel
                        debitis blanditiis provident nemo saepe, suscipit rem
                        deserunt. Dolor vero aliquid culpa. Harum eum quidem
                        velit fugit error quibusdam dolorem accusamus explicabo
                        sit nostrum dolor fugiat natus totam suscipit illo
                        provident, minima autem. Minima doloribus voluptate
                        totam, praesentium laboriosam perferendis cupiditate
                        vitae repellendus beatae veniam. Necessitatibus
                        recusandae illum neque, quia harum perspiciatis ad
                        tempore vel, exercitationem sapiente laboriosam
                        perferendis vero quis ut distinctio eius aperiam, rem
                        veritatis molestiae quam sit corrupti dolor ab. Dolores
                        molestiae a voluptate deleniti esse vitae autem ad
                        quisquam saepe id adipisci ullam incidunt molestias,
                        accusantium qui nemo similique assumenda nam! Ipsam sed
                        saepe ullam, voluptatem dolore error beatae, cupiditate
                        ipsum, iusto unde accusantium reiciendis? Iste non rerum
                        odit suscipit facere molestias ipsum tempore asperiores
                        obcaecati. Quae dolorum voluptatem aliquam dolores,
                        veritatis iure pariatur amet soluta neque ad rerum
                        possimus consequuntur dignissimos cumque corporis
                        perspiciatis laboriosam quasi excepturi illo. Eligendi,
                        fuga rem laborum impedit eius laudantium nostrum alias.
                        Delectus doloribus asperiores maiores excepturi culpa
                        assumenda totam vel quam! Vel rem earum tenetur rerum
                        quisquam, inventore id accusantium error iusto placeat
                        ea eius repellat provident neque!
                    </div>
                </div>
            </div>
        </div>
    );
}
