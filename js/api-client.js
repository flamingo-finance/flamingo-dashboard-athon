import axios from "axios";

export default class ApiClient {
  constructor(url) {
    this.api = axios.create({ baseURL: url ? url : "https://neo-api.b-cdn.net" });
  }

  // PUBLIC

  // Wallet Data

  async getWalletWalletHistory(address, page) {
    return this.fetchData("/wallet/wallet/history", { neo_address: address, page });
  }

  async getWalletWalletLatest(address) {
    return this.fetchData("/wallet/wallet/latest", { neo_address: address });
  }

  async getWalletClaimsHistory(address, page) {
    return this.fetchData("/wallet/claims/history", { neo_address: address, page });
  }

  async getWalletClaimsLatest(address) {
    return this.fetchData("/wallet/claims/latest", { neo_address: address });
  }

  async getWalletTradeHistory(address, page) {
    return this.fetchData("/wallet/trade/history", { neo_address: address, page });
  }

  async getWalletTradeLatest(address) {
    return this.fetchData("/wallet/trade/latest", { neo_address: address });
  }

  async getWalletLpHistory(address, page) {
    return this.fetchData("/wallet/lp/history", { neo_address: address, page });
  }

  async getWalletLpLatest(address) {
    return this.fetchData("/wallet/lp/latest", { neo_address: address });
  }

  async getWalletStakingHistory(address, page) {
    return this.fetchData("/wallet/staking/history", { neo_address: address, page });
  }

  async getWalletStakingLatest(address) {
    return this.fetchData("/wallet/staking/latest", { neo_address: address });
  }

  async getWalletLendHistory(address, page) {
    return this.fetchData("/wallet/lend/history", { neo_address: address, page });
  }

  async getWalletLendLatest(address) {
    return this.fetchData("/wallet/lend/latest", { neo_address: address });
  }

  async getWalletTransferHistory(address, page) {
    return this.fetchData("/wallet/transfer/history", { neo_address: address, page });
  }

  async getWalletTransferLatest(address) {
    return this.fetchData("/wallet/transfer/latest", { neo_address: address });
  }

  // Flamingo Live Data

  async getFlamingoLivedataPricesLatest() {
    return this.fetchData("/flamingo/live-data/prices/latest", {});
  }

  async getFlamingoLivedataPricesFromblock(blocknumber) {
    return this.fetchData(`/flamingo/live-data/prices/from-block/${blocknumber}`, {});
  }

  async getFlamingoLivedataPricesFromdatetime({ year, month, day, hour, minute }) {
    return this.fetchData(`/flamingo/live-data/prices/from-datetime/${year}/${month}/${day}/${hour}/${minute}`, {});
  }

  async getFlamingoLivedataPricesFromtimestamp(timestamp) {
    return this.fetchData(`/flamingo/live-data/prices/from-timestamp/${timestamp}`, {});
  }

  async getFlamingoLivedataFiatexchangerate(pair) {
    return this.fetchData(`/flamingo/live-data/fiat-exchange-rate/${pair}`, {});
  }

  async getFlamingoLivedataClaimsHistory(page) {
    return this.fetchData("/flamingo/live-data/claims/history", { page });
  }

  async getFlamingoLivedataClaimsLatest() {
    return this.fetchData("/flamingo/live-data/claims/latest", {});
  }

  async getFlamingoLivedataTradeHistory(page) {
    return this.fetchData("/flamingo/live-data/trade/history", { page });
  }

  async getFlamingoLivedataTradeLatest() {
    return this.fetchData("/flamingo/live-data/trade/latest", {});
  }

  async getFlamingoLivedataLpHistory(page) {
    return this.fetchData("/flamingo/live-data/lp/history", { page });
  }

  async getFlamingoLivedataLpLatest() {
    return this.fetchData("/flamingo/live-data/lp/latest", {});
  }

  async getFlamingoLivedataStakingHistory(page) {
    return this.fetchData("/flamingo/live-data/staking/history", { page });
  }

  async getFlamingoLivedataStakingLatest() {
    return this.fetchData("/flamingo/live-data/staking/latest", {});
  }

  async getFlamingoLivedataLendHistory(page) {
    return this.fetchData("/flamingo/live-data/lend/history", { page });
  }

  async getFlamingoLivedataLendLatest() {
    return this.fetchData("/flamingo/live-data/lend/latest", {});
  }

  async getFlamingoLivedataTransferHistory(page) {
    return this.fetchData("/flamingo/live-data/transfer/history", { page });
  }

  async getFlamingoLivedataTransferLatest() {
    return this.fetchData("/flamingo/live-data/transfer/latest", {});
  }

  // Flamingo Analytics Data

  async getFlamingoAnalyticsMonthhistory(collection, { year, month }) {
    return this.fetchData(`/flamingo/analytics/month-history/${collection}`, { year, month });
  }

  async getFlamingoAnalyticsMonthlatest(collection) {
    return this.fetchData(`/flamingo/analytics/month-latest/${collection}`, {});
  }

  async getFlamingoAnalyticsDailyhistory(collection, { year, month, day }) {
    return this.fetchData(`/flamingo/analytics/daily-history/${collection}`, { year, month, day });
  }

  async getFlamingoAnalyticsDailylatest(collection) {
    return this.fetchData(`/flamingo/analytics/daily-latest/${collection}`, {});
  }

  async getFlamingoAnalyticsRolling30days(collection) {
    return this.fetchData(`/flamingo/analytics/rolling-30-days/${collection}`, {});
  }

  async getFlamingoAnalyticsFlamingoTotalsupply() {
    return this.fetchData("/flamingo/analytics/flamingo/total-supply", {});
  }

  async getFlamingoAnalyticsFlamingoUsdvaluelocked() {
    return this.fetchData("/flamingo/analytics/flamingo/usd-value-locked", {});
  }

  // PRIVATE

  async fetchData(endpoint, params = {}) {
    try {
      const response = await this.api.get(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching data from URL:", endpoint, error);
      throw error;
    }
  }
}
