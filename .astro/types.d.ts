declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
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

	type ContentConfig = typeof import("../src/content/config");
}
