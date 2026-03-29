# Mini Blog SSG con Astro

Proyecto de ejemplo para generar un blog estático con Astro usando:

- colección de contenido en Markdown
- tipado centralizado en TypeScript
- páginas estáticas generadas con `getStaticPaths`
- estilos globales personalizados

> Este proyecto se realizó como un ejemplo para desplegar aplicaciones web de Astro con SSG en Dokploy.

## Desplegar para desarrollo

1. Instalar dependencias:

```bash
pnpm install
```

2. Inicia el servidor de desarrollo:

```sh
pnpm run dev #http://localhost:4321
```

## Estructura del proyecto

```text
src/
├─ components/
│  ├─ HeroBlock.astro
│  ├─ PostCard.astro
│  ├─ PostHeader.astro
│  └─ StatCard.astro
├─ data/blog/
│  └─ my-first-post.md
├─ layouts/
│  ├─ BaseLayout.astro
│  └─ BlogPostLayout.astro
├─ pages/
│  ├─ [...slug].astro
│  └─ index.astro
├─ scripts/
│  └─ types.ts
├─ styles/
│  └─ global.css
└─ content.config.ts
```

## Componentes

| Componente | Propósito | Props |
|:-----------|:----------|:------|
| **HeroBlock** | Bloque destacado con título y stats | `eyebrow`, `title`, `description`, `stats` |
| **PostCard** | Tarjeta de post en grid | `post: BlogCardData` |
| **PostHeader** | Encabezado y metadata de post | `frontmatter: BlogPostData` |
| **StatCard** | Métrica individual | `value`, `label` |

## Tipos (TypeScript)

Los tipos están centralizados en `src/scripts/types.ts`:

```typescript
export interface BlogPostData {
  title: string;
  excerpt: string;
  date: Date;
  updated?: Date;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  draft?: boolean;
  featured?: boolean;
}

export interface BlogCardData extends BlogPostData {
  slug: string;
}
```
