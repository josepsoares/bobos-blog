declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"a-morte-de-cada-dia.md": {
  id: "a-morte-de-cada-dia.md",
  slug: "a-morte-de-cada-dia",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"aqui-jaz-animais-nas-estradas.md": {
  id: "aqui-jaz-animais-nas-estradas.md",
  slug: "aqui-jaz-animais-nas-estradas",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"balizas-do-mundo.md": {
  id: "balizas-do-mundo.md",
  slug: "balizas-do-mundo",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ciclos-infindaveis.md": {
  id: "ciclos-infindaveis.md",
  slug: "ciclos-infindaveis",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"dados-deuses-e-outras-coisas.md": {
  id: "dados-deuses-e-outras-coisas.md",
  slug: "dados-deuses-e-outras-coisas",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"eu-sou-o-bobo.md": {
  id: "eu-sou-o-bobo.md",
  slug: "eu-sou-o-bobo",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"extraterrestres-ou-noutras-palavras-insetos.md": {
  id: "extraterrestres-ou-noutras-palavras-insetos.md",
  slug: "extraterrestres-ou-noutras-palavras-insetos",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"faz-de-conta-que-tanto-gosto.md": {
  id: "faz-de-conta-que-tanto-gosto.md",
  slug: "faz-de-conta-que-tanto-gosto",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"paradoxos-apeteciveis.md": {
  id: "paradoxos-apeteciveis.md",
  slug: "paradoxos-apeteciveis",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"quatro-paredes-sagradas.md": {
  id: "quatro-paredes-sagradas.md",
  slug: "quatro-paredes-sagradas",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"supermercado.md": {
  id: "supermercado.md",
  slug: "supermercado",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("./config");
}
