<h1 style="text-align: center;">Sponsors ❤️</h1>

<div class="sponsors-page">
  <div class="sponsors-intro">
    <p>Graffle is supported by these generous sponsors. If you find Graffle valuable and would like to support its development, please consider becoming a sponsor.</p>
  </div>

  <div class="sponsors-grid">
    <a href="https://www.lambdatest.com/" target="_blank" rel="noopener noreferrer" class="sponsor-item">
      <div class="sponsor-card">
        <img src="/_assets/sponsors/lambdatest.png" alt="LambdaTest" class="sponsor-logo">
        <div class="sponsor-info">
          <span class="sponsor-name">LambdaTest</span>
          <span class="sponsor-tagline">Cloud-based testing platform</span>
        </div>
      </div>
    </a>
    <a href="https://github.com/sponsors/jasonkuhrt" target="_blank" rel="noopener noreferrer" class="sponsor-item sponsor-cta">
      <div class="sponsor-card sponsor-card-cta">
        <div class="sponsor-cta-content">
          <span class="sponsor-cta-text">Become a sponsor</span>
        </div>
      </div>
    </a>
  </div>
</div>

<style>
.sponsors-page {
  max-width: 1200px;
  margin: 48px auto;
  padding: 0 24px;
}

.sponsors-intro {
  text-align: center;
  margin-bottom: 48px;
}

.sponsors-intro p {
  font-size: 18px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  max-width: 720px;
  margin: 0 auto;
}

.sponsors-grid {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 32px;
  flex-wrap: wrap;
}

.sponsor-item {
  text-decoration: none !important;
  display: flex;
  transition: transform 0.3s ease;
}

.sponsor-item:hover {
  transform: scale(1.02);
  text-decoration: none !important;
}

.sponsor-item:hover .sponsor-name,
.sponsor-item:hover .sponsor-tagline {
  text-decoration: none !important;
}

.sponsor-card {
  background: var(--vp-c-bg);
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  min-width: 240px;
  flex: 1;
}

.sponsor-item:hover .sponsor-card {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.sponsor-logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 50%;
  background: #ffffff;
  padding: 16px;
}

.sponsor-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
}

.sponsor-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.sponsor-tagline {
  font-size: 14px;
  color: var(--vp-c-text-2);
  opacity: 0.8;
}

.sponsor-card-cta {
  border: 2px dashed var(--vp-c-divider);
  background: transparent;
  justify-content: center;
}

.sponsor-item.sponsor-cta:hover .sponsor-card-cta {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.sponsor-cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.sponsor-cta-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

/* Responsive */
@media (max-width: 767px) {
  .sponsors-page {
    margin: 32px auto;
    padding: 0 20px;
  }

  .sponsors-intro {
    margin-bottom: 32px;
  }

  .sponsors-intro p {
    font-size: 16px;
  }

  .sponsors-grid {
    gap: 20px;
  }

  .sponsor-card {
    padding: 24px;
    min-width: auto;
    gap: 16px;
  }

  .sponsor-logo {
    width: 72px;
    height: 72px;
    padding: 12px;
  }

  .sponsor-name {
    font-size: 18px;
  }

  .sponsor-tagline {
    font-size: 13px;
  }
}

@media (min-width: 767px) and (max-width: 1023px) {
  .sponsor-card {
    padding: 28px;
  }
}
</style>
