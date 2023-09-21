<script lang="ts">
	import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte';

	interface SectionType {
		title: string;
		refId: string;
		content?: any;
	}

	// Props
	export let sections: SectionType[] | [] = [];
</script>

<div class="container flex flex-wrap w-full px-2 pt-8 mx-auto mt-16 lg:pt-16">
	<div class="w-full text-xl leading-normal text-gray-800 lg:w-1/5 lg:px-6">
		<p class="py-2 text-base font-bold text-gray-700 lg:pb-6">Contents</p>
		<div class="sticky inset-0 block lg:hidden">
			<button
				id="menu-toggle"
				class="flex justify-end w-full px-3 py-3 bg-white border border-gray-600 rounded appearance-none lg:bg-transparent hover:border-primary-500 focus:outline-none"
			>
				<svg
					class="float-right h-3 fill-current"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
				</svg>
			</button>
		</div>
		<div
			class="sticky inset-0 z-20 hidden w-full h-64 mt-0 overflow-x-hidden overflow-y-auto bg-white border border-gray-400 shadow lg:h-auto lg:overflow-y-hidden lg:block lg:border-transparent lg:shadow-none lg:bg-transparent"
			style="top:5em;"
			id="menu-content"
		>
			<!-- Table of Contents -->
			<ul class="list-reset">
				{#each sections as section}
					<li class="py-2 md:my-0 hover:bg-primary-100 lg:hover:bg-transparent">
						<a
							href={section.refId}
							class="block pl-4 text-gray-700 no-underline align-middle border-l-4 border-transparent hover:!text-primary-500 lg:hover:border-gray-400"
						>
							<span class="pb-1 text-sm font-bold text-gray-900 md:pb-0">{section.title}</span>
						</a>
					</li>
				{/each}
			</ul>

			<!-- <li class="py-2 md:my-0 hover:bg-primary-100 lg:hover:bg-transparent">
					<a
						href="/help/#"
						class="block pl-4 text-gray-700 no-underline align-middle border-l-4 border-transparent hover:text-primary-500 lg:hover:border-gray-400"
					>
						<span class="pb-1 text-sm md:pb-0">Tasks</span>
					</a>
				</li> -->
		</div>
	</div>
	<div
		class="w-full p-8 mt-6 leading-normal text-gray-900 bg-white border border-gray-400 lg:w-4/5 lg:mt-0 border-rounded"
	>
		<!--Title-->
		<div class="font-sans">
			<span class="text-base font-bold text-primary-500">&laquo;</span>
			<a
				href="/help/#"
				class="text-base font-bold no-underline text-primary-500 md:text-sm hover:underline"
				>Back Link</a
			>
			{#each sections as section}
				<article id={section.refId}>
					<h1 class="pt-6 pb-2 font-sans text-xl text-gray-900 break-normal">
						{section.title}
					</h1>
					<hr class="border-b border-gray-400" />
					<!--Post Content-->
					<p class="flex flex-col w-full py-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit nisi quam
						repellendus est harum nobis aliquid possimus quas! Expedita libero veniam laborum
						voluptatibus neque eius praesentium. Quis, sequi id. Quos, optio. Sapiente, id provident
						ab voluptates quo doloribus voluptate nihil vel reiciendis, magnam suscipit minus
						assumenda fugit dicta optio non perspiciatis vero hic cupiditate exercitationem maiores
						dolorem, corporis debitis? Enim quae fugiat harum, sunt vel molestiae nisi iste libero
						eum perspiciatis provident officia! Nihil eligendi aperiam aut ipsam sint minus facere
						in ipsum id. Ratione, animi quibusdam! Temporibus, beatae! Laborum, quisquam. Eaque
						natus repellendus cumque officia, omnis beatae? Corrupti atque tempore molestias quia
						ducimus vitae? Dolore iusto, fugit magnam cum error enim, molestiae, consequuntur porro
						quam corporis provident placeat! Voluptate repellat natus minus, adipisci debitis
						temporibus. Architecto odio soluta sint laudantium, maiores nobis suscipit repellat
						cupiditate nam ad modi excepturi nisi numquam vitae neque iure atque sapiente quia.
						Reprehenderit. Sapiente ipsam odit voluptatem similique illo aperiam provident saepe
						obcaecati aliquid maxime dignissimos placeat aspernatur veritatis tempore cumque, nobis
						dolorum quis laboriosam consectetur iusto perspiciatis! Distinctio cum nostrum quaerat
						pariatur! Numquam cupiditate sint quis perferendis error possimus. Aut enim eaque cum,
						laboriosam nisi dolorem officiis quas ex, obcaecati delectus magnam voluptatem
						perferendis architecto laborum expedita quidem quia quam in omnis! Veritatis quis
						obcaecati sapiente dolorum maxime ipsam consequuntur facilis. Esse molestiae eius magni
						quis ab sed odio impedit omnis eum, voluptatem ut incidunt iusto quia at quam soluta!
						Iste, debitis.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi non quasi, minus
						rerum sunt ad architecto. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Dignissimos esse vitae quos corrupti corporis non possimus illo consequuntur dolore
						culpa recusandae nemo numquam tempora sequi placeat libero, aliquid reiciendis fugiat!
						Cupiditate quidem sapiente assumenda expedita voluptatibus incidunt. Dolorem quasi
						exercitationem soluta commodi odio quaerat blanditiis amet laudantium quam fuga
						similique temporibus eius ratione ullam, totam architecto consequatur voluptatibus,
						consequuntur minus. Soluta, numquam id minima voluptates inventore pariatur, incidunt,
						illo repellat omnis harum architecto quidem. Consectetur obcaecati quo rem dolores.
						Consequuntur eius sapiente totam voluptatem, aut non aliquam repudiandae. Vero,
						mollitia. Nulla quis harum eligendi? Aliquam, nostrum placeat laboriosam, animi harum
						ducimus tempora, dolore magni dolorem iste officiis. Perspiciatis unde expedita eaque
						quisquam voluptates, eum esse atque cum accusamus rem provident. Obcaecati eligendi rem
						animi, facilis sint sapiente autem facere cupiditate quos nostrum aut debitis a atque
						dolore maxime eaque laboriosam blanditiis quibusdam, magni, delectus non quod voluptatum
						vitae natus. Incidunt? Nesciunt distinctio laudantium culpa. Quam, assumenda. Incidunt
						pariatur cupiditate unde quisquam iste, rerum possimus quos eligendi quas
						necessitatibus? Reprehenderit quis velit recusandae pariatur placeat esse est voluptas
						eveniet cupiditate totam? Ex officiis ducimus, corrupti sapiente ullam quia ab expedita
						voluptate maxime quasi mollitia alias cum repellat repellendus nulla exercitationem
						omnis doloribus distinctio quidem error quis deserunt fuga. Fugiat, vitae quisquam.
						Reprehenderit maiores eos nesciunt dolorum inventore quod porro sequi ullam excepturi
						tempore, voluptatum, rerum ratione consequuntur doloribus earum voluptate veritatis odit
						quibusdam error accusamus ex libero dolor voluptatibus? Commodi, ipsum? Doloribus
						repellat eligendi maxime corrupti dolorum dicta optio harum, voluptate qui! Eos nemo
						soluta illo quia harum provident doloremque fuga explicabo, laudantium cumque natus
						minima repellendus necessitatibus, facilis expedita officiis? Dolore debitis dolores
						repudiandae molestiae ab necessitatibus quos hic corporis repellendus sed eaque, impedit
						vero itaque voluptas odio vitae ipsum dignissimos at amet optio assumenda cumque!
						Debitis totam ea beatae? Quos unde minus cupiditate nisi vel ut animi odio aliquid ad,
						ipsum tempora nulla officia voluptatibus rem dolore sequi quisquam. Recusandae illum
						laborum et perspiciatis iste amet inventore consectetur? Fugit! Ullam rerum ut error
						consequatur laudantium? Sequi ullam consequatur nobis nemo a amet vitae culpa, earum
						ipsum, labore ipsa maiores hic veritatis laborum necessitatibus rem, sint perspiciatis
						beatae ea obcaecati? Officia doloremque eos aperiam, odit est, laudantium id, aliquam
						ullam magni animi minus enim doloribus a earum accusamus saepe provident. Est odit, sit
						aperiam cumque debitis dolores sint delectus porro. Hic aspernatur doloremque laborum
						ratione atque aliquid officiis, totam porro obcaecati quaerat suscipit! Velit, ad
						blanditiis. Magnam quod veniam odio saepe, eius earum quas nemo atque, iure, non
						voluptates alias. Itaque, blanditiis hic! Numquam velit suscipit maxime quo. Iusto,
						animi corrupti in soluta cupiditate repellendus nulla aperiam odit totam ut eveniet,
						optio dolorem magni quos? Maiores magni sunt itaque eum? Error veniam mollitia corrupti
						quidem exercitationem, tenetur aliquid nisi voluptate dolorum debitis maxime officiis
						cum, id excepturi fugiat quibusdam totam tempore. Ad earum ipsa dolor alias quis sunt
						perspiciatis reiciendis. Dolor quidem saepe architecto maxime consectetur quia quasi
						quos, voluptas nemo! Aliquam assumenda, quo sed corrupti itaque earum quis explicabo
						quidem veritatis repudiandae eius provident asperiores. Eum fugit corporis dicta. Vero
						doloremque, perferendis blanditiis reiciendis accusamus modi voluptates saepe nobis quo
						ut quidem eligendi quas aliquid. Magni eaque, reiciendis minima eos optio nostrum sint
						laboriosam eveniet tenetur omnis! Excepturi, corporis? Ullam dolorem sint voluptate! Sed
						corporis dolor odio! Similique enim sint ea rem sed excepturi iste est. Dolor officiis
						voluptas deleniti? Cupiditate corrupti itaque voluptatibus! Veniam neque facere
						consectetur repellat? Et iusto nihil repellendus exercitationem aliquam praesentium.
						Corporis quod earum laboriosam placeat id nostrum officiis sequi possimus ex architecto
						optio voluptatum recusandae, animi voluptatem, ipsam debitis incidunt. Iure, eum
						obcaecati.
					</p>
				</article>
			{/each}
		</div>
		<!-- Useful -->
		<div class="flex items-center py-4 border-t border-gray-400">
			<svg
				class="h-16 p-4 mr-2 text-gray-600 border rounded fill-current hover:shadow hover:bg-primary-100 hover:text-green-500"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<path
					d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"
				/>
			</svg>
			<svg
				class="h-16 p-4 mr-2 text-gray-600 border rounded fill-current hover:shadow hover:bg-primary-100 hover:text-red-500"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<path
					d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z"
				/>
			</svg>
			<div class="grid gap-1 p-2">
				<p class="font-semibold text-gray-800 capitalize">Did you find this article useful?</p>
				<p class="pt-2 text-xs text-gray-600">0 out of 0 found this useful</p>
			</div>
		</div>
		<!-- /Useful -->
		<!--Back link -->
		<div class="flex items-center w-full py-8 lg:w-4/5 lg:ml-auto md:text-sm">
			<a
				href="/help/#"
				class="gap-2 text-base font-bold divide-x-0 btn btn-sm btn-group variant-ringed-primary text-primary-500"
			>
				<span class="w-4 aspect-square">
					<IoIosArrowBack />
				</span>
				<span>Back to Help</span>
			</a>
		</div>
	</div>
</div>
